import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("--"+token+"--");
    if(!token){
      return res.status(401).json({
        message: "You need to be logged in to access this route"
      });
    }
    const decoded = jwt.decode(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    if(!decoded){
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    const user = await User.findById(decoded.id).select("-password");
    if(!user){
      return res.status(404).json({
        message: "No user found with this id"
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error in protected route"
    });
  }
}

export default protectRoute;