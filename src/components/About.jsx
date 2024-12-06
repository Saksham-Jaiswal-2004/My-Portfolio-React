import React from 'react'
import { motion } from "motion/react"
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT_1 } from '../constants'
import { ABOUT_TEXT_2 } from '../constants'
import { ABOUT_TEXT_3 } from '../constants'
import { ABOUT_TEXT_4 } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 min-h-screen' id='about'>
      <h1 className='my-28 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>

      <div className='flex flex-wrap'>
        <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5, delay:0.5}} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={aboutImg} alt="" />
          </div>
        </motion.div>

        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center justify-center'>
              <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5, delay:0.5}} className='my-0.5 max-w-xl py-6 text-left'>{ABOUT_TEXT_1}</motion.p>
              <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5, delay:0.6}} className='my-0.5 max-w-xl py-6 text-left'>{ABOUT_TEXT_2}</motion.p>
              <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5, delay:0.7}} className='my-0.5 max-w-xl py-6 text-left'>{ABOUT_TEXT_3}</motion.p>
              <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5, delay:0.8}} className='my-0.5 max-w-xl py-6 text-left'>{ABOUT_TEXT_4}</motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
