import React, { useContext, useState } from 'react'
import andersonLogo from '../assets/anderson.png';
import menuBar from '../assets/menuBar.png'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
function NavBar() {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})

    }

    return (

        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={andersonLogo} alt="logo" className='w-36' /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-yellow-400 hidden'></hr>
                </NavLink>
                <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-yellow-400 hidden'></hr>
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-yellow-400 hidden'></hr>
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-yellow-400 hidden'></hr>
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <i onClick={() => setShowSearch(true)} className="fa-solid fa-magnifying-glass w-5 cursor-pointer"></i>
                <div className='group relative'>

                    <i onClick={() => token ? null : navigate('/login')} className="fa-solid fa-user w-5 cursor-pointer"></i>
                    {/* Dropdown Menu */}
                    {token && 
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-2'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>Profile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>

                    }
                </div>
                <Link to="/cart" className='relative' >
                    <i className="fa-solid fa-cart-shopping w-5 min-w-5"></i>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-yellow-400 text-black aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

                </Link>
                <img onClick={() => setVisible(true)} src={menuBar} className='w-5 cursor-pointer sm:hidden' />

            </div>

            {/* Sidebar menu for small screen*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
                        <i className="fa-solid fa-xmark h-4 rotate-180"></i>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

                </div>
            </div>
        </div>
    )
}

export default NavBar
