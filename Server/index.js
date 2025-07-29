import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/instrument.js';
import * as Sentry from '@sentry/node';
import userRouter from './routes/user.route.js';
import projectRouter from './routes/project.route.js';
import session from 'express-session';
import passport from 'passport';
import './config/passport.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import QuoteRouter from './routes/quote.route.js';
import Contactrouter from './routes/contact.route.js';
import router from './routes/auth.route.js';

dotenv.config();
const app = express();


const allowedOrigins = [
  'https://webdone.in',
  'https://www.webdone.in',
  'http://localhost:5173'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


app.options('*', cors());


app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(helmet({ crossOriginEmbedderPolicy: false }));


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, 
    sameSite: 'none', 
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.json({ message: 'Production server running on port ' + process.env.PORT });
});

app.use('/auth', router);
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);
app.use('/api/quote', QuoteRouter);
app.use('/api/contactForm', Contactrouter);


Sentry.setupExpressErrorHandler(app);


const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(' Production server is running on port', PORT);
  });
});
