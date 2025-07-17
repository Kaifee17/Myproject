import sendEmailFun from "../config/sendEmailFun.js";
import QuoteModel from "../models/quote.model.js";
import dotenv from 'dotenv'

import  QuoteEmail from "../utils/quoteTemplate.js";


dotenv.config() ; 


import UserModel from "../models/user.model.js"; 


export async function requestQuote(req, res) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }

    const { name, companyName, email, phone, priceRange, message } = req.body;

    if (!name || !companyName || !email || !phone || !priceRange || !message) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'All fields are required',
      });
    }

    
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'User not found',
      });
    }

    
    if (user.email !== email) {
      return res.status(403).json({
        success: false,
        error: true,
        message: 'Email mismatch: the email provided does not match your account',
      });
    }

   
    const newEntry = new QuoteModel({
      name,
      companyName,
      email,
      phone,
      priceRange,
      message,
      user: userId,
    });

    await newEntry.save();

    
    await sendEmailFun({
      sendTo: process.env.EMAIL,
      subject: "Check the message you got from the client",
      html: QuoteEmail({ email, message, companyName, phone, priceRange }),
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully and email sent',
      data: newEntry,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
