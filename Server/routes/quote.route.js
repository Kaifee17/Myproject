import { Router } from "express";

const QuoteRouter = Router() ; 

import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import { requestQuote } from "../controllers/quote.controller.js";



QuoteRouter.post('/submit-quote',  requestQuote);

export default QuoteRouter ; 
