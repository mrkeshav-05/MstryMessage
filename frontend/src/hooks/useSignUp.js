import { useState } from "react";
// import {toast} from 'react-hot-toast';
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
const useSignUp = () => {

  const [loading, setLoading] = useState(false)

  const {authUser, setAuthUser} = useAuthContext();

  const signup = async ({fullName, username, password, confirmPassword, gender}) => {
    const isSuccess = await handleInputErrors({fullName, username, password, confirmPassword, gender});
    if (!isSuccess) { return };

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({fullName, username, password, confirmPassword, gender})
      });

      const data = await res.json();
      console.log(data)

      if(data.error) {
        throw new Error(data.error)
      }
      // StoreUser in localStorage
      localStorage.setItem('chat-user', JSON.stringify(data));

      // context
      setAuthUser(data);
    } catch (error) {
      toast.dark(error.message);
    }finally{
      setLoading(false);
    }
  }

  return { loading, signup };
};


export default useSignUp;

const handleInputErrors = async ({fullName, username, password, confirmPassword, gender}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.dark('Please fill in all fields')
    return false;
  }

  if(password !== confirmPassword) {
    toast.dark('Passwords do not match')
    return false;
  }

  // if(password.length < 6) {
  //   toast.error('Password must be at least 6 characters long')
  //   return false;
  // }

  return true;
}