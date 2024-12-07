import React from 'react'
import { motion } from "motion/react"
import { HERO_CONTENT } from "../constants"
// import profilePic from "../assets/kevinRushProfile.png"
import profilePic from "../assets/Saksham.jpeg"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}},
});

const Hero = () => {

  return (
    <div className='border-b border-neutral-900 pb-4 lg:my-32 max-flex:mt-40' id='home'>
      <div className='flex flex-wrap'>
         <div className='w-full lg:w-1/2'>
             <div className='flex flex-col items-center lg:items-start text-left max-flex:text-center'>
                 <motion.h1 variants={container(0)} initial="hidden" whileInView={"visible"} className='pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl max-flex:text-7xl'>Saksham Jaiswal</motion.h1>
                 <motion.span variants={container(0.5)} initial="hidden" whileInView={"visible"} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Coder | Web Developer | UI/UX | Editor</motion.span>
                 <motion.p variants={container(1)} initial="hidden" whileInView={"visible"} className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
                 <div className="my-6 text-center flex justify-start">
                   <a href="https://drive.google.com/file/d/1hActEu0ABiNZN__vci-iKGU8HEIl0bnB/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.4}} transition={{duration:0.5}} type="submit" className="mx-2 bg-none border-x-2 border-purple-700 hover:border-2 transition-all ease-in-out duration-100 text-white py-2 px-4 rounded-2xl text-lg shadow-lg">Check Resume</motion.button></a>
                   <a href='https://github.com/Saksham-Jaiswal-2004' target="_blank" rel="noopener noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.4}} transition={{duration:0.5}} type="submit" className="mx-2 bg-none border-x-2 border-purple-700 hover:border-2 transition-all ease-in-out duration-100 text-white py-2 px-4 rounded-2xl text-lg shadow-lg">Github Profile</motion.button></a>
                 </div>
             </div>
         </div>

         <div className='w-full lg:w-1/2 lg:p-8'>
             <div className='flex justify-center'>
                <motion.img initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profilePic} alt="Saksham Jaiswal Pic" className='rounded-3xl filter brightness-75 contrast-100'/>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
