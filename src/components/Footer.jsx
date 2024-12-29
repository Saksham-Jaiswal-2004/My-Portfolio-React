import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { CONTACT } from '../constants'

const Footer = () => {
  return (
    <div className=' border-b border-neutral-900 py-5' id='footer'>
      <div className='flex flex-row flex-wrap justify-start w-full my-4'>
          <div className=' mx-10 max-flex:mx-4 text-left tracking-tight w-full'>
              <motion.h2 whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1.5}} className='my-3 text-5xl pb-6 font-thin tracking-tight max-flex:text-4xl'>Saksham Jaiswal</motion.h2>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='flex items-center justify-start'>
                <a href="https://wa.me/918420828031" target="_blank" rel="noopener noreferrer"><FaPhoneSquareAlt className='text-xl rounded-xl'/></a>
                <p className="my-3 text-lg max-flex:text-base"><a href="https://wa.me/918420828031" target="_blank" rel="noopener noreferrer"> - {CONTACT.phoneNo}</a></p>
              </motion.div>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.4}} className='flex items-center justify-start'>
                <a href="mailto:sakshamjaiswalofficial@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail className='text-xl'/></a>
                <p className="my-3 text-lg max-flex:text-base"><a href="mailto:sakshamjaiswalofficial@gmail.com" target="_blank" rel="noopener noreferrer"> - {CONTACT.email}</a></p>
              </motion.div>
          </div>
  
          <div className='mx-8 my-4 flex flex-wrap items-center justify-start gap-2 text-4xl max-flex:text-base: w-full'>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0}} href="https://github.com/Saksham-Jaiswal-2004" target="_blank" rel="noopener noreferrer"><FaGithub href='https://github.com/Saksham-Jaiswal-2004' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.2}} href="https://www.linkedin.com/in/saksham-jaiswal-220637302" target="_blank" rel="noopener noreferrer"><FaLinkedin href='https://linkedin.com/in/saksham-jaiswal-220637302' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1.5 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.4}} href="https://x.com/SakshamJais2004" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.6}} href="https://www.instagram.com/saksham__jaiswal/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.8}} href="https://medium.com/@sakshamjaiswalofficial" target="_blank" rel="noopener noreferrer"><FaMedium className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
              <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:2.0}} href="https://hashnode.com/@sakshamjaiswal" target="_blank" rel="noopener noreferrer"><FaHashnode className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-violet-700'/></motion.a>
          </div>
      </div>

      <div>
        <p>© 2024 <Link to="home" smooth={true} duration={500} offset={-100} className="mx-1 navLink text-purple-300">Saksham Jaiswal</Link> | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
