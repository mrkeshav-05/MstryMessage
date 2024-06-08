import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
const MessageContainer = () => {

  // const noChatSelected = true;
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // clanup function (unmount)
    return () => {setSelectedConversation(null)}
  }, [setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {
        !selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            {/* Header */}
            <div className='bg-slate-500 px-4 py-2 mb-2 flex gap-1'>
              <p className='label-text'>To: </p>
              <p className='text-gray-900 font-bold'>{selectedConversation.fullName}</p>
            </div>
            {/* Messages */}
            <Messages />
            {/* MessageInput */}
            <MessageInput />
          </>
        )
      }
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Keshav 🌼</p>
        <p>Select a chat to start messaging</p>
        // <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};