import React from 'react'

const Message = () => {
  return (
    // <div className='chat chat-end'>
    //   <div className='chat-imvage avatar'>
    //     <div className='rounded-full w-10'>
    //       <img src="vite.svg" alt="" />
    //     </div>
    //   </div>
    //   <div className={`chat-bubble text-white bg-blue-500`}>Hi what is up</div>
    //   <div className='chat-footer opacity-50 flex gap-1 text-xs items-center'>12:42</div>
      
    // </div>


    <div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="vite.svg" />
				</div>
			</div>
			<div className={`chat-bubble text-white  pb-2`}>Hi what is up</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
		</div>
  )
}

export default Message