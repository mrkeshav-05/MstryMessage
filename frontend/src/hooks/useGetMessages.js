import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation, fetchMessages} = useConversation();


  // 
  useEffect(() => {
    if (selectedConversation?._id) {
      fetchMessages(selectedConversation._id);
    }
  }, [selectedConversation?._id]);
  // 





  useEffect(()=>{
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if(data.error){
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false);
      }
    }

    if(selectedConversation?._id) getMessages();

  }, [selectedConversation?._id, setMessages]);

  return { loading: useConversation((state)=>state.loading), messages }
}

export default useGetMessages
