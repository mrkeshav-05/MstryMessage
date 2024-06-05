import  User  from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';



export const signup = async (req, res) => {
  
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    
    if(!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({error: 'All fields are required'})
    }
    console.log(confirmPassword, password)

    if(password !== confirmPassword) {
      return res.status(400).json({error: 'Password and Confirm Password do not match'})
    }

    const user = await User.findOne({username});
    if(user) {
      console.log('User already exists with this username')
      return res.status(400).json({error: 'User already exists with this username'})
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // https://avatar.iran.liara.run/public/girl?username=Maria
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName: fullName, // fullName: fullName
      username: username,
      gender: gender,
      password: hashedPassword,
      profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic,
    })
    if(newUser){
      // Generate jwt tokens here
      console.log(newUser);

      await generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      return res.status(201).json({
        message: 'User registered successfully',
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
        gender: newUser.gender,
      })
    }else{
      return res.status(400).json({error: 'Invalid user data'});
    }
    
  } catch (error) {
    console.log("Error is signup controller", error.message);
    return res.status(500).json({error: 'Internal Server Error'})
  }
}


export const login = async (req, res) => {
  
  try {
    const { username, password } = req.body;
    if(!username || !password) {
      console.log('All fields are required')
      return res.status(400).json({error: 'All fields are required'})
    }
  
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcryptjs.compare(password, user?.password || '');
  
    console.log(user)
    if(!user || !isPasswordCorrect){
      console.log('Invalid credentials')
      return res.status(400).json({error: 'Invalid credentials'})
    }
  
    await generateTokenAndSetCookie(user._id, res);
  
    res.status(200).json({
      message: "Logged in successfully",
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
      gender: user.gender,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Internal Server Error'})
  }
}

export const logout = async (req, res) => {
  
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'})
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Internal Server Error'})
  }

}

