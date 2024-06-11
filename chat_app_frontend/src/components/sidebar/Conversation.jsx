import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emoji, lastIdx}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  const {messages} = useConversation();

  // const totleMessages = messages.filter((msg) => msg.senderId === conversation._id );
  console.log(messages)
  // console.log(totleMessages)

  return (
    <>

      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer
      ${isSelected ? 'bg-sky-500' : ''}`}
      onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline" } `}>
          <div className='w-12 rounded-full '>
              <img src={conversation.profilePicture}
                alt="user avatar" />
            
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-grey-200'>{conversation.fullName}</p>
      {/* <span className={` ${messages ? "indicator-item badge bg-green-400 border-none badge-secondary" : ""}  `}>{totleMessages}</span>  */}

            <span className='text-xl'>{emoji}</span>
          </div>
        </div>

      </div>
      { !lastIdx && <div className='divider my-0 py-0 h-1'></div> }
    </>

  )
}

export default Conversation