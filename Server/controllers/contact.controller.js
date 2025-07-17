import dotenv from 'dotenv';


import contactModel from '../models/Contactform.model.js';
import ContactEmail from '../utils/contactEmail.js';
import sendEmailFun from '../config/sendEmailFun.js';

dotenv.config();

export async function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'All fields are required',
      });
    }

    const newContact = new contactModel({ name, email, message });
    await newContact.save();

    await sendEmailFun({
      sendTo: process.env.EMAIL,
      subject: "New Contact Message",
      text: "",
      html: ContactEmail({ name, email, message }),
    });

    res.status(201).json({
      success: true,
      message: 'Message submitted successfully',
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}
