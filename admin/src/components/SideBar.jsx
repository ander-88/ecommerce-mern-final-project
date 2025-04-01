import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1  ' to="/add">
            <i className="fa-solid fa-plus text-gray-600 w-5 h-5"></i>
            <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1  ' to="/list">
            <i className="fa-solid fa-cart-shopping text-gray-600 w-5 h-5"></i>
            <p className='hidden md:block'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1  ' to="/orders">
            <i className="fa-solid fa-cart-shopping text-gray-600 w-5 h-5"></i>
            <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>
      
    </div>
  )
}

export default SideBar
