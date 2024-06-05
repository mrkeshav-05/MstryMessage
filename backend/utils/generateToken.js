import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (id, res) => {
  const token = jwt.sign({id}, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRATION
  })

  return res.cookie('token', token, {
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // only works on https
    maxAge: 15 * 60 * 60 * 24 * 1000 // 15 days
  })
}

export default generateTokenAndSetCookie;