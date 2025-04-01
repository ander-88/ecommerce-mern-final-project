import React from 'react'
import { assets } from '../assets/assets'

function NavBar({setToken}) {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
    <img className='w-[max(10%,80px)]' src={assets.logo} alt="logo" />
      <button onClick={()=>setToken('')} className='bg-yellow-400 text-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default NavBar
