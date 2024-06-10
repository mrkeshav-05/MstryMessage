import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        console.log("hello i am fetching")
        const res = await fetch('http://localhost:8000/api/users').then((response) => {
          console.log("fetching")
          console.log(response.url)
        });
        console.log(res.json())
        const data = await res.json();
        if(data.error){
          throw new Error(data.error);
        }
        setConversations(data)
      } catch (error) {
        toast.dark(error.message)
      } finally {
        setLoading(false);
      }
    }

    getConversations();
  }, [])
  return {loading, conversations};
}

export default useGetConversations