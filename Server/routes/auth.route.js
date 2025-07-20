import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv'
dotenv.config() ; 
const router = express.Router();
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';


router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after successful login
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    const redirectUrl = req.headers.referer?.includes('vercel.app')
      ? 'https://myproject-iota-lac.vercel.app'
      : 'http://localhost:5173';

    res.redirect(`${redirectUrl}/`);
  }
);



router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Optional: Failure route
router.get('/failure', (req, res) => {
  res.send('Google login failed.');
});
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ user: req.user });
  } else {
    return res.status(401).json({ user: null });
  }
});


export default router;
