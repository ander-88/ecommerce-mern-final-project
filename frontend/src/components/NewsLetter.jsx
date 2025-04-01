import React from 'react'

function NewsLetter() {
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      

    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 30% off</p>
      <p className='text-gray-400 mt-3'>
      Sign up today and enjoy an exclusive 30% discount on your first purchase!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your e-mail...' required></input>
        <button type='submit' className='bg-yellow-400 text-black text-xs px-10 py-4 hover:bg-black hover:text-white cursor-pointer'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter
