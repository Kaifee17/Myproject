import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import './config/instrument.js'
import * as Sentry from "@sentry/node";
import userRouter from './routes/user.route.js';
import projectRouter from './routes/project.route.js';
dotenv.config()

import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import QuoteRouter from './routes/quote.route.js';
import Contactrouter from './routes/contact.route.js';

const app = express()

// ✅ Updated CORS setup to allow both localhost and Vercel frontend
const allowedOrigins = [
  'http://localhost:5173',
  'https://myproject-iota-lac.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.options('*', cors())

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
  crossOriginEmbedderPolicy: false
}))

app.get('/', (req, res) => {
  res.json({
    message: "server is running on port " + process.env.PORT
  })
})

app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)
app.use('/api/quote', QuoteRouter)
app.use('/api/contactForm', Contactrouter)

Sentry.setupExpressErrorHandler(app)

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is running on", process.env.PORT)
  })
})
