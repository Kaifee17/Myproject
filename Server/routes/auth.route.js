const router = express.Router();

const FRONTEND_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://myproject-iota-lac.vercel.app'
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
