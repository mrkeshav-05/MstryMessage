import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("conv: ", conversations)
  console.log(getRandomEmoji())
  return (
    <div className='py-2 flex-1 flex-col overflow-auto'>
      {
        Array.isArray(conversations) && !loading && (
          <p className='text-center text-2xl text-gray-400'>Koi nhi hai <br /> baat karne ko 🥱😴</p>
        )
      }
      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : (
        conversations && Array.isArray(conversations) && conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
        // <h1>hello</h1>
      )}
    </div>
  )
}

export default Conversations