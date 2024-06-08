import { useState, useCallback } from 'react';
import useConversation from '../zustand/useConversation';
import { toast } from 'react-toastify';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages, selectedConversation, fetchMessages } = useConversation();

  const sendMessage = useCallback(async (message) => {
    setLoading(true);
    // Optional: Update the UI optimistically
    const tempMessage = {
      _id: `temp-${Date.now()}`,
      message,
      senderId: 'yourUserId', // Replace with actual user ID
      createdAt: new Date().toISOString(),
    };
    // 

    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      // if (res.ok) {
      //   await setMessages((prevMessages) => [...prevMessages, data]);
      //   // Optional: Fetch messages to ensure the state is updated correctly
      //   await fetchMessages(selectedConversation._id);
      // }
      if (res.ok) {
        await setMessages((prevMessages) =>
          prevMessages.map((msg) => (msg._id.startsWith('temp-') ? data : msg))
        );
        // Fetch messages to ensure the state is updated correctly
        await fetchMessages(selectedConversation._id);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [selectedConversation._id, setMessages, fetchMessages]);

  return { loading, sendMessage };
};

export default useSendMessage;
