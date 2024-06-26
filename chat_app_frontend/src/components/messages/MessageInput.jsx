import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import { useEffect, useRef } from 'react';
const MessageInput = () => {

  // 
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  // 

  const [message, setMessage] = useState('');
  const {loading, sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Message Sent')
    if(!message) return ;
    await sendMessage(message);
    console.log(message);
    setMessage('')
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit} >
      <div className='w-full relative'>
        <input 
        ref={inputRef}
        type="text" 
        className='border text-sm rounded-lg w-full p-2.5  bg-gray-700 border-gray-500 text-white'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput