import React from 'react'
import marquee from '../assets/marquee/marquee1.png'

const Marquee = () => {
  return (
    <div className='bg-white text-black py-16 lg:py-20 mt-12 overflow-hidden'>
      
      {/* row-1 */}
      <div className='whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold tracking-tight mb-12'>
        <span className='flex gap-6 lg:gap-10 mx-8 items-center'>
          THINK
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          CODE
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          BUILD
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          DEBUG
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          DEPLOY
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          THINK
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          CODE
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
          BUILD
          <img src={marquee} alt='' className='marquee-star1 w-[7vw]' />
        </span>
      </div>

      {/* row-2 */}
      <div className='whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold tracking-tight'>
        <span className='flex gap-6 lg:gap-10 mx-8 items-center'>
          THINK
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          CODE
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          BUILD
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          DEBUG
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          DEPLOY
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          THINK
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          CODE
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
          BUILD
          <img src={marquee} alt='' className='marquee-star2 w-[7vw]' />
        </span>
      </div>

    </div>
  )
}

export default Marquee
