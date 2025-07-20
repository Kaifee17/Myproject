import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Auth from '../models/Auth.model.js';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.NODE_ENV === 'production'
        ? 'https://myproject-yt5z.onrender.com/auth/google/callback'
        : 'http://localhost:5000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const provider = 'google';
        const providerAccountId = profile.id;

        // Check if Auth record already exists
        let authRecord = await Auth.findOne({ provider, providerAccountId });

        let user;

        if (authRecord) {
          user = await User.findById(authRecord.userId);
        } else {
          // If no Auth record, create user and link account
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos?.[0]?.value || '',
            provider: 'google',
            verify_email: true,
            isVerified: true,
            role: 'USER',
            isAdmin: false,
          });

          await Auth.create({
            userId: user._id,
            provider,
            providerAccountId,
          });
        }

        // Attach user to req.user
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Required for Passport session support (can be skipped if you're using JWT-only)
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
