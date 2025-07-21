import sendEmailFun from "../config/sendEmailFun.js";
import QuoteModel from "../models/quote.model.js";
import dotenv from 'dotenv'

import  QuoteEmail from "../utils/quoteTemplate.js";


dotenv.config() ; 


import UserModel from "../models/user.model.js"; 


export async function requestQuote(req, res) {
  try {
    const { name, companyName, email, phone, priceRange, message } = req.body;

    if (!name || !companyName || !email || !phone || !priceRange || !message) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'All fields are required',
      });
    }

    const newEntry = new QuoteModel({
      name,
      companyName,
      email,
      phone,
      priceRange,
      message,
      user: null, // No user if it's public
    });

    await newEntry.save();

    await sendEmailFun({
      sendTo: process.env.EMAIL,
      subject: "New Quote Request from Website",
      html: QuoteEmail({ email, message, companyName, phone, priceRange }),
    });

    res.status(201).json({
      success: true,
      message: 'Quote submitted successfully and email sent',
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

