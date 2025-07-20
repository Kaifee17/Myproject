import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type : String ,
        required : [true , "Provide name"]
    },
    email:{
        type : String  ,  
        required : [true , "Provide email"] , 
        unique : true
    }, 
    provider: {
        type: String,
        enum: ['credentials', 'google'],
        default: 'credentials',
    },

    password: {
        type: String,
        required: function () {
        return this.provider === 'credentials';
    },
    },
    avatar: {
        type : String , 
        default : ""
    }, 
    mobile:{
        type : Number ,  
        default : null 
    },  
    verify_email:{
        type : Boolean , 
        default : false
    } ,
    last_login_date : {
        type : Date ,
        default : ""
    }, 
    status:{
        type : String , 
        enum : ["Active" , "InActive" , "Suspended"]  ,
        default  :  "Active"
    }, 
    forgot_password_otp :{
        type : String , 
        default : null
    },  
    forgot_password_expiry:{
        type : Date , 
        default : ""
    },  
    role : {
        type : String ,  
        enum:["ADMIN" , "USER"] , 
        default : "USER"
    },
    otp:{
        type : String 
    },
    otpExpires:{
        type :Date
    }, 
    isVerified:{
        type:Boolean
    },
    refreshToken:{
    type: String,
    default: '', 
  },
  accesstoken:{
    type : String , 
    default : ''
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},
    {timestamps : true}
)
const UserModel = mongoose.model("User" , UserSchema) 
export default UserModel