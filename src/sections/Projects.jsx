import React from 'react'
import GradientButton from '../components/GradientButton'

const Projects = () => {
  return (
    <div>
        <div className="h-screen bg-white text-black py-24 lg:py-40">
            {/* title wrapper */}
            <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
                <div className="max-w-xl">
                    <h3 className='mb-3'>Selected Work</h3>
                    <p className='text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, aperiam.</p>
                </div>
                <GradientButton text="Explore All" link="" className='btn-light' />
            </div>
        </div>
      
    </div>
  )
}

export default Projects
