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
      {/* {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null} */}
      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : (
        conversations && conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  )
}

export default Conversations