import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { format } from 'date-fns';
const Message = ({message, lastIdx}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  // console.log("mes from messa", message)
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePicture : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? `bg-blue-500` : ``;
  const sentMessageTime = format(new Date(message.createdAt), 'p');

  const shakeClass = message.message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component'
            src={profilePic}
          />
				</div>
			</div>
			<div class={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}  pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{sentMessageTime}</div>
		</div>
  )
}

export default Message