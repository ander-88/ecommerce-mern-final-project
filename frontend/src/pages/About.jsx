import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title txt1={'ABOUT'} txt2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.addAdidas} alt="cover" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Anderson, we bring you the best in footwear from top brands, driven by our passion for fashion. Whether you're looking for timeless classics or the latest trends, we’ve got the perfect pair for every style. Step up your shoe game with Anderson!</p>
          <p>At Anderson, we believe that shoes are more than just footwear—they're a statement of style, confidence, and personality. Our carefully curated collection features premium brands, ensuring top-quality craftsmanship, comfort, and trendsetting designs. Whether you need casual sneakers, performance sports shoes, or elegant classics, we are dedicated to bringing you the perfect fit for every occasion. With a seamless shopping experience and a commitment to customer satisfaction, Anderson is your go-to destination for fashion-forward footwear.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Anderson, our mission is to provide high-quality, stylish footwear from top brands while ensuring a seamless shopping experience. We are committed to helping you find the perfect pair that matches your style, comfort, and needs, all while delivering exceptional customer service.</p>
      </div>

      </div>
      <div className='text-xl py-4'>
        <Title txt1={'WHY'} txt2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Anderson, we guarantee top-quality footwear from trusted brands. Every pair is carefully selected for style, durability, and comfort, ensuring you get only the best with every purchase.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Shop with ease at Anderson! Enjoy a seamless browsing experience, secure payments, and fast delivery—all designed to make finding your perfect pair simple and hassle-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Your satisfaction is our priority. Our dedicated support team is always ready to assist you with any questions, ensuring a smooth and enjoyable shopping experience.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About
