import  jwt  from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

const generateRefreshToken = async (userId)=>{
    const token = await jwt.sign(
        {id : userId},  
        process.env.SECRET_KEY_REFRESH_TOKEN,  
        {expiresIn : "7d"}
)
        const updateRefreshTokenUser = await UserModel.updateOne({id : userId} , 
            {refresh_token  : token }
        )
        return token
}

export default generateRefreshToken