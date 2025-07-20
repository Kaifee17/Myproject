import UserModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import sendEmailFun from "../config/sendEmailFun.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'
import ResetPass from "../utils/resetPasswordTemplate.js";

dotenv.config() ; 

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, 
        secure :true
    });
    


export async function registerUserController(req, res) {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Provide email, password, and username",
        error: true,
        success: false,
      });
    }

    // Check if user already exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Already registered",
        error: true,
        success: false,
      });
    }

    // Generate OTP and hash password
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create new user
    user = new UserModel({
      name,
      email,
      password: hashPassword,
      otp: verifyCode,
      otpExpires: Date.now() + 600000, // 10 minutes
    });

    // Save user
    await user.save();

    // Send verification email
    await sendEmailFun({
      sendTo: email,
      subject: "Verify your email from WebDone",
      text: "",
      html: VerificationEmail(name, verifyCode),
    });

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return res.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function verifyEmailController(req , res){
  try {
    const {email , otp}  = req.body ; 
  const user = await UserModel.findOne({email : email})
  if(!user){
    return res.status(400).json({
      error : true , 
      success : false ,
      message : "user not found"
    })
  }
  const iscodevalid = otp===user.otp ; 
  const isnotexpire = user.otpExpires > Date.now() ;
    if(iscodevalid && isnotexpire){
      user.verify_email = true;
      user.otp = null ;
      user.otpExpires=null ; 
      await user.save()
      return res.status(200).json({
        success :true , 
        error  : false,  
        message : " successfully verified"
      });
    }
    else if(!iscodevalid){
      return res.status(400).json({
        success : false , 
        error : true , 
        message : "invalid otp"
      })
    }
    else{
      return res.status(400).json({
        success : false , 
        error : true , 
        message : " otp expired"
      })
    }
    
  } catch (error) {
    return res.status(400).json({
      error : true , 
      success : false , 
      message  : error.message || error
    })
    
  }


}
export async function loginUserController(req , res){
  try {
        const{email , password} = req.body 

    const user  = await UserModel.findOne({email  : email}) 
    if(!user){
      return res.status(400).json({
        success:false , 
        error :  true , 
        message : " User not registered"
      })
    }
    if(user.status!="Active"){
      return res.status(400).json({
        success:false , 
        error :  true , 
        message : " contact to admin "
      })
    }
    if(user.verify_email!=true){
      return res.status(400).json({
        success:false , 
        error :  true , 
        message : " Verify your email first  "
      })
    }
    const isPasswordMatch =  await bcryptjs.compare(password , user.password)
    if(!isPasswordMatch){
      return res.status(400).json({
        success : false ,  
        error : true , 
        message : " password is incorrect"
      })
    }
    const accessToken   = await generateAccessToken(user._id , user.email) 
    const refreshToken =  await generateRefreshToken(user._id)

     const updateUser = await UserModel.findByIdAndUpdate(user ?._id, {
      last_login_date : new Date(),
      refreshToken: refreshToken, 
      accesstoken : accessToken
     })
    const cookiesOption = {
    httpOnly: true,
    secure: true,
    sameSite: "None"
}

    res.cookie('accessToken' , accessToken , cookiesOption)
    res.cookie('refreshToken' , refreshToken , cookiesOption)

    return res.json({
      message : " Login Succesfully" , 
      success :  true , 
      error   :false , 
      data : {
        accessToken , 
        refreshToken
      }
    })
    
  } catch (error) {
    return res.status(400).json({
      message : error.message|| error , 
      success: false , 
      error : true
    })
    
  }
}

export async function logoutController(req , res){
  try {
    const userid = req.userId 
    if (!userid) {
    return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }
    const cookiesOption = {
      httpOnly : true , 
      sameSite : "None" , 
      secure : true
    }
    res.clearCookie("accessToken" , cookiesOption)
    res.clearCookie("refreshToken" , cookiesOption)
    const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,  {
      refreshToken : ""
    })
    return res.json({
      message :" Logout successfully", 
      success : true , 
      error  : false 
    })
    
  } catch (error) {
    return res.status(400).json({
      message : error.message || error , 
      success : false , 
      error : true
    })
    
  }
}

var imagesArr = [] ; 
export async function userAvatarController(req, res) {
  try {
    imagesArr = [] ; 
    const userId = req.userId;
    const image = req.files;
    

    
    if (!image || image.length === 0) {
      console.log("img")
      return res.status(400).json({
        message: "No image uploaded",
        success: false,
        error: true
      });
    }
    

    const user = await UserModel.findOne({ _id: userId });


    if (!user) {
      
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true
      });
    }


    const imgUrl = user.avatar;
    const urlArr = imgUrl.split("/");
    const avatar_image = urlArr[urlArr.length - 1];
    const imageName = avatar_image.split(".")[0];
    if (imageName) {
      const result = await cloudinary.uploader.destroy(
        imageName,
        (error , result)=>{
        }
      );


    }

  
    

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false
    };

    for (let i = 0; i < image?.length; i++) {
      const img  = await cloudinary.uploader.upload(
        image[i].path , 
        options , 
        function(error  , result ){
          imagesArr.push(result.secure_url) ; 
          fs.unlinkSync(`uploads/${req.files[i].filename}`)
        }
      )
    }

    user.avatar = imagesArr[0];
    await user.save();
    console.log("avatar saved")

    console.log("User after save:", user);

    return res.status(200).json({
      _id: userId,
      avatar: imagesArr[0]
    });
  } catch (error) {
    console.error("Logout error ", error) ; 
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
}

export async function removeImageFromCloudinary(req, res) {
  try {
    const imgUrl = req.query.img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];
    if (imageName) {
      const result = await cloudinary.uploader.destroy(
        imageName,
        (error , result)=>{
        }
      );
      if(result){
        res.status(200).send(result)
      }


    }


  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function updateUserDetails(req, res) {
  try {
    const userId = req.userId;
    const { name, email, mobile, password } = req.body;

    const userExist = await UserModel.findById(userId);
    if (!userExist) {
      return res.status(400).send('The user cannot be updated');
    }

    let verifyCode = "";
    if (email && email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = userExist.password;
    if (password) {
      hashPassword = await bcryptjs.hash(password, 10);
    }

    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name,
        mobile,
        email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : null
      },
      { new: true }
    );

    if (email !== userExist.email) {
      await sendEmailFun({
        sendTo: email,
        subject: "Verify your email",
        text: "",
        html: VerificationEmail(name, verifyCode)
      });
    }

    return res.json({
      message: "User updated successfully",
      error: false,
      success: true,
      user: updateUser
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

export async function forgotPasswordController(req , res){
  try {
    const {email} = req.body ; 

  const user = await UserModel.findOne({email}) ; 
  if(!user){
    return res.status(400).json({
      message : " user not found" , 
      error : true , 
      success : false
    })
  }
  let  verifyCode =  Math.floor(100000 + Math.random()* 900000).toString() ; 
  let otpExpires = Date.now() + 600000 ; 

  const updateUser = await UserModel.findByIdAndUpdate(
    user._id , 
    {
      forgot_password_otp: verifyCode , 
      forgot_password_expiry : otpExpires
    },  
    {new : true}
  )


  await sendEmailFun({
    sendTo : email , 
    subject : "Reset Your Password" , 
    text: ""  , 
    html :ResetPass(user.name, verifyCode)
  })

  return res.json({
  message: "OTP sent to email",
  success: true,
  error: false
});

  } catch (error) {
    return res.status(500).json({
      message : error.message || error , 
      success : false,  
      error : true
    })
  }
}
export async function verifyForgotPassword(req , res){
  try {
    const {email , otp} =  req.body  ; 
  if(!email || !otp){
    return res.status(400).json({
      message : "please provide required field email and otp " , 
      success  : false , 
      error  : true 
    })
  }
  const user = await UserModel.findOne({email}) ; 
  if(!user){
    return res.status(400).json({
      message : " user not found" , 
      error : true , 
      success : false
    })
  }

  const currentTime = new Date().toISOString ; 
  if(user.forgot_password_expiry  < currentTime){
    return res.status(400).json({
      message : " Otp is expired" , 
      success : false , 
      error  : true
    })
  }

  if(otp !== user.forgot_password_otp){
    return res.status(400).json({
      message : "Invalid Otp " , 
      success:  false,  
      error  : true
    })
  }

  user.forgot_password_otp = null;
user.forgot_password_expiry = null;

  await user.save() ; 
  return res.status(200).json({
    message : "otp verified successfully" , 
    success : true , 
    error : false
  })
  } catch (error) {
    return res.status(500).json({
      message : error.message || error , 
      success :false, 
       error : true
    })
  }



}




export async function resetPasswordController(req, res) {
  try {
    const { email, newPassword , confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "Please provide  email , new password and confirm password",
        success: false,
        error: true
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true
      });
    }

    if(confirmPassword!==newPassword){
      return res.status(400).json({
        message : "Password and Confirm password is not macthing"
      })
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 10);
    user.password = hashedPassword;


    user.forgot_password_otp = null;
    user.forgot_password_expiry = null;

    await user.save();

    return res.status(200).json({
      message: "Password reset successfully",
      success: true,
      error: false
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
}

export async function refreshToken(req ,  res){
  try {
      const refreshToken = req.cookies.refreshToken || req?.header?.authorization?.split(" ")[1] ; 
      if(!refreshToken){
        return res.status(401).json({
          message  :"Invalid Token",  
          error : true,  
          succes : false
        })
      }

      const verifyToken = await jwt.verify(refreshToken , process.env.SECRET_KEY_REFRESH_TOKEN) ;
      if(!verifyToken){
        return res.status(401).json({
          message  :"Token is expired",  
          error : true,  
          succes : false
        })
      }

      const userId = verifyToken?._id ; 

      const newAccessToken = await generateAccessToken(userId) ; 

      const cookiesOption = {
        httpOnly : true,  
        secure : true,  
        sameSite : "None"
      }

      res.cookie('Access Token ' , newAccessToken ,cookiesOption) ; 
      return res.json({
        message : "New Access Token generated" , 
        success : true , 
        error  : false,  
        data : {
          accessToken : newAccessToken
        }
      })

    
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
}



export async function userDetails(req , res){
  try {
    const userId  = req.userId ; 
    const user = await UserModel.findById(userId).select('-password  -refreshToken')

    return res.json({
      message : 'user details achieved' , 
      data : user , 
      error : false , 
      success : true
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
}



