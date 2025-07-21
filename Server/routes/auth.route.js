import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv'
dotenv.config() ; 
const router = express.Router();

const FRONTEND_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://webdone.in/'
    : 'http://localhost:5173';

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    res.redirect(`${FRONTEND_URL}/`);
  }
);



router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect(FRONTEND_URL); // redirect to frontend after logout
    });
  });
});


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
