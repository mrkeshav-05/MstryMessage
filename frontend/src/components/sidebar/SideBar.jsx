import React from 'react'
import SearchInput from './SearchInput'
import Coversations from './Coversations'
import LogoutButton from './LogoutButton'
const SideBar = () => {
  return (
    <div className='border border-slate-500 p-4 flex flex-col'>
      <>
        <SearchInput />
        <div className='divider px-3'></div>
        <Coversations />
        <LogoutButton />
      </>
    </div>
  )
}

export default SideBar