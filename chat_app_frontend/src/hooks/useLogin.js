import React, { useState } from 'react'
// import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const useLogin = () => {
  
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser} = useAuthContext()
  const login = async (username, password) => {
    const isSuccess = handleInputError(username, password);
    console.log(isSuccess)
    if (!isSuccess) { return; }
    try {
      setLoading(true);
      // console.log('/api/auth/login')
      // console.log()
      // console.log('Sending request to http://localhost:8000/api/auth/login');
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
      });
      const data = await res.json();
      // console.log(res.status)
      if(!res.ok){
        const errorData = await res.json();
        throw new Error(errorData.error || 'Login failed');
      }
      if(data.error) {
        throw new Error(data.error);
      }
      console.log(data)

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.dark("Congratulations! for login 🎉")
    } catch (error) {
      toast.dark('Bkl sahi details daal 😡');
    } finally {
      setLoading(false);
    }
  }

  return {loading, login};
}

export default useLogin


const handleInputError = (username, password) => {
  if (!username || !password) {
		toast.dark("Please fill in all fields");
		return false;
  }
  return true;
}