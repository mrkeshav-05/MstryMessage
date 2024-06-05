import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  profilePicture: {
    type: String,
    default: "",
  }
});

const User = mongoose.model('User', userSchema);
// this will create "users"
export default User;