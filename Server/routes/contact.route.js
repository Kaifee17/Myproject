import express from 'express';
import { Router } from 'express';
import { submitContact } from '../controllers/contact.controller.js';




const Contactrouter = Router();

Contactrouter.post('/contact', submitContact);

export default Contactrouter;
