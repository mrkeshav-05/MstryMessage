import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  
  try {
    // this is because of the middelware protectRoutes
    const loggedInUser = req.user._id;

    const allUsersExceptYou = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

    res.status(200).json(
      allUsersExceptYou.map(user => {
        // this is for showing only the required fields
        return {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          profilePicture: user.profilePicture,
        }
      })
      // allUsersExceptYou
    )
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}