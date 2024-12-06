import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CONTACT } from '../constants'

const Footer = () => {
  return (
    <div className=' border-b border-neutral-900 py-5' id='footer'>
      <div className='flex flex-row flex-wrap justify-start w-full my-4'>
          <div className=' mx-10 max-flex:mx-4 text-left tracking-tight w-full'>
              <motion.h2 whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1.5}} className='my-3 text-5xl pb-8 font-thin tracking-tight max-flex:text-4xl'>Saksham Jaiswal</motion.h2>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='flex items-center justify-start'>
                <FaPhoneSquareAlt className='text-xl rounded-xl'/>
                <p className="my-4 text-lg max-flex:text-base"> - {CONTACT.phoneNo}</p>
              </motion.div>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.4}} className='flex items-center justify-start'>
                <MdEmail className='text-xl'/>
                <p className="my-4 text-lg max-flex:text-base"> - {CONTACT.email}</p>
              </motion.div>
          </div>
  
          <div className='mx-8 my-4 flex flex-wrap items-center justify-start gap-4 text-4xl max-flex:text-base: w-full'>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0}} href="https://github.com/Saksham-Jaiswal-2004" target="_blank" rel="noopener noreferrer"><FaGithub href='https://github.com/Saksham-Jaiswal-2004' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.3}} href="https://www.linkedin.com/in/saksham-jaiswal-220637302" target="_blank" rel="noopener noreferrer"><FaLinkedin href='https://linkedin.com/in/saksham-jaiswal-220637302' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1.5 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.6}} href="https://x.com/SakshamJais2004" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.9}} href="https://www.instagram.com/saksham__jaiswal/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
          </div>
      </div>

      <div>
        <p>© 2024 <Link to="home" smooth={true} duration={500} offset={-100} className="mx-1 navLink text-purple-300">Saksham Jaiswal</Link> | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer