import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeleton/MessageSkeleton';
const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("Message: ", messages)
  // console.log(typeof(messages.messages))
  return (
    <div className='px-4 flex-1 overflow-auto'>
      
      
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
    </div>
  )
}

export default Messages