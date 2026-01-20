import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
            <h3>Skills in detail</h3>
        </div>
      </div>

      <div className="relative">
        <div className="bg-black text-white py-16 lg:py-20">
            <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 item-center'>
                {/* left side */}
                <div className='flex gap-6 lg:gap-8'>
                    <span>01</span>
                <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                    React <br /> & gsap
                </h2>
                </div>
                {/* right side */}
                <div className="flex item-center">
                    <p className="text-lg lg:text-xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam quos nihil nulla molestiae? Sint deleniti harum porro distinctio omnis?
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
