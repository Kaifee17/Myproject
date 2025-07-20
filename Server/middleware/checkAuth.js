export const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // user is authenticated, allow access
  }
  return res.status(401).json({ message: 'Unauthorized. Please login.' });
};
