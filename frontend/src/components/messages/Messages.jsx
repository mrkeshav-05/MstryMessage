import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeleton/MessageSkeleton';
import useConversation from '../../zustand/useConversation';
const Messages = () => {
  const { loading, messages } = useGetMessages();
  const messagesArray = messages.messages || [];

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0)
  }, [messages])

  
    

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {/* <div ref={lastMessageRef} ></div> */}
      {
        !loading && messagesArray.length > 0 && messagesArray.map((message, idx) => (
          <div
            key={message._id}
            ref={lastMessageRef}
          >
            <Message
            message={message}
            lastIdx={idx === messagesArray.length - 1}
          />
          </div>
          
        ))
      }
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messagesArray.length === 0 && (
        <p className='text-center'>Send a message to start the Conversation</p>
      )}
    </div>
  )
}

export default Messages