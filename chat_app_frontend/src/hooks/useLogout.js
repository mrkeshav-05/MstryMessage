import {useState} from 'react'
// import toast from 'react-hot-toast'
import { toast } from 'react-toastify'
import { AuthContext, useAuthContext } from '../context/AuthContext'
const useLogout = () => {
  const [loading, setLoading] = useState(false) 
  const {setAuthUser} = useAuthContext()
  const logout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if(data.error) {
        throw new Error(data.error)
      }
      localStorage.removeItem('chat-user')
      console.log(localStorage.getItem('chat-user'))
      setAuthUser(null)
      toast.dark("Tussi kyu gye 😭😭")
    } catch (error) {
      toast.dark(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, logout };
}

export default useLogout;