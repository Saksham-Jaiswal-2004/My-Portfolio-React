import React from 'react'
import { motion } from "motion/react"
import '../index.css'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='min-h-screen border-d border-neutral-900 pb-4' id='experience'>
      <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className='my-28 text-center text-4xl'>Experience</motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='flex flex-wrap lg:justify-center text-left my-8'>
                <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                  <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </motion.div>

                <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                  <p className='mb-4 text-neutral-400'>{experience.description}</p>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 cursor-pointer'>{tech}</span>
                  ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
