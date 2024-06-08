import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  
  try {
    // this is because of the middelware protectRoutes
    const loggedInUser = req.user._id;

    const allUsersExceptYou = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

    res.status(200).json(
      allUsersExceptYou
    )
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}