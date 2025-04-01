import React from 'react'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
      <i className="fa-solid fa-right-left w-12 m-auto mb-5"></i>
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>Hassle-free exchanges!</p>
      </div>

      <div>
      <i className="fa-solid fa-star w-12 m-auto mb-5"></i>
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>7 days for a hassle-free refund or exchange!</p>
      </div>

      <div>
      <i className="fa-solid fa-info w-12 m-auto mb-5"></i>
      <p className='font-semibold'>Best Customer Support</p>
      <p className='text-gray-400'>Always ready to help!</p>
      </div>

    </div>
  )
}

export default OurPolicy
