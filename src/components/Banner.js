import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "On Time Delivery",
      "Providing Best User Experience For Customers",
      "Your Trusted Partner",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })

  return (
    <div className='p-6 sm:p-16'>
      <div className='h-96 max-w-screen-2xl mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-xl lg:text-6xl sm:text-3xl uppercase font-bold bannerH1'>Car Configurator</h1>
        <p className='text-sm lg:text-2xl sm:lg font-semibold mt-4'>{text}<Cursor cursorBlinking cursorStyle="|" cursorColor='#ffaa17' /></p>
      </div>
      <div className='flex flex-row gap-2 text-sm lg:text-xl sm:text-base font-semibold'>
        <a>Home</a>
        <p>•</p>
        <a className='font-bold' style={{ color: '#ffaa17' }}>Car Configurator</a>
      </div>
    </div>
  )
}

export default Banner;