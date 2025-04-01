import React from 'react'
import andersonLogo from '../assets/anderson.png';

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={andersonLogo} alt="logo" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Step into Style, Explore premium footwear with comfort, quality, and trendsetting designs. Shop your perfect pair today! 
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

            <div>
                <p className='text-xl font-medium mb-5'>Contact us</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+216 888 000 888</li>
                    <li>anderson.contact@email.com</li>
                </ul>
            </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2025 ANDERSON. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
