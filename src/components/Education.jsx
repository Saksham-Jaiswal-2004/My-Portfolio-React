import React from 'react'
import { motion } from "motion/react"

const Education = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 min-h-screen' id='education'>
      <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='mt-28 mb-14 text-center text-4xl'>Education</motion.h1>
    </div>
  )
}

export default Education
