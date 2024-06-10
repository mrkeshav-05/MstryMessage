import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import { toast } from 'react-toastify';
const SearchInput = () => {

  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.dark('Search term must be at least 3 characters')
    }
    const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.dark('No user found with the given search term')
      setSearch('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FiSearch className='w-6 h-6 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput