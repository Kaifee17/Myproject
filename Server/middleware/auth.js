// Server/middleware/auth.js

import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  var token = req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

  if(!token){
    token  = req.query.token ; 
  }
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(500).json({ message: "Invalid token" });
  }
};

export default auth;
