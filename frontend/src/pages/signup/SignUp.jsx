import React from 'react'
import GenderChackBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import useSignUp from '../../hooks/useSignUp.js'
const Signup = () => {

  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleCheckboxChange = (gender) => {
    setInput({...input, gender})
  }

  const {loading, signup} = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(input)
    await signup(input)

  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-grey-300'>Sign-Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Keshav Thakur'
              className='w-full input input-bordered h-10'
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='mrkeshav.05'
              className='w-full input input-bordered h-10'
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}

            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={input.confirmPassword}
              onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender Checkbox */}
          <GenderChackBox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

          <Link
            to={"/login"}
            className='text-sm hover:underline hover:text-blue-600 inline-block'
          >Already have an accaount? </Link>
          <div className='flex justify-center'>
            <button className='btn  btn-sm  w-3/4 bg-[#0048ff7a] hover:bg-[#0004ff84] '
            disabled={loading}
            >{
              loading ? (
                <span className='loading loading-spinner'></span>
              ) : 'Sign-Up'
            }
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signup