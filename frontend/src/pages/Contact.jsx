import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title txt1={'CONTACT'} txt2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src={assets.contactImg} alt="contact image" className='w-full md:max-w-[480px]' />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>08 Happy Street <br />19th Avenue, MarryLand, USA </p>
        <p className='text-gray-500'>Tel: +216 888 000 888 <br />Email:anderson.contact@email.com</p>
        <p className='font-semibold text-xl text-gray-600'>Careers at ANDERSON</p>
        <p className='text-gray-500'>Learn more about our team and job openings. </p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-yellow-400 hover:text-black transition-all duration-500 cursor-pointer '>Explore Jobs</button>
      </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact
