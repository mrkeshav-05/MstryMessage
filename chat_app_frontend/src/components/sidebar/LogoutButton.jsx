import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import useLogout from '../../hooks/useLogout.js';
const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto  pt-2'>
      <Link to={"/login"}>
        {
          !loading ? (
            <MdOutlineLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
          ):(
            <span className='loading loading-spinner'></span>
          )
        }
      </Link>
    </div>
  )
}

export default LogoutButton