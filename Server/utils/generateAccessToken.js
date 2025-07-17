import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateAccessToken = async (userId, email ) => {
  const secret = process.env.SECRET_KEY_ACCESS_TOKEN;

  if (!secret) {
    throw new Error("SECRET_KEY_ACCESS_TOKEN is not defined in .env");
  }

  const token = await jwt.sign({ id: userId , email }, secret, { expiresIn: "5h" });

  return token;
};

export default generateAccessToken;
