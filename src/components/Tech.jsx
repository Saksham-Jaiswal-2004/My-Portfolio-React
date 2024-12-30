import React from 'react'
import { motion } from "motion/react"
import '../index.css'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPug } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiThreedotjs } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPycharm } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { SiGimp } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { RiBlenderLine } from "react-icons/ri";
import { TbBrandOauth } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";


const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [20, -20],
    transition: {
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 min-h-screen' id='technologies'>
      <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='mt-28 mb-14 text-center text-4xl'>Technologies / Skills</motion.h1>
      <div className='flex flex-wrap items-start justify-center gap-2'>
        {/* Frontend */}
        <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:1}} transition={{duration:1.2}} className='flex flex-col m-1 p-1 w-2/5 max-flex:w-full items-center'>
            <h1 className='md:my-28 my-16 text-center text-2xl'>Frontend</h1>
            <div className='flex flex-wrap items-center justify-center'>
              <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                <FaHtml5 className="md:text-7xl text-2xl text-orange-600"/>
                <p>HTML</p>
              </motion.div>

              <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <FaCss3Alt className="md:text-7xl text-2xl text-blue-600"/>
                  <p>CSS</p>
              </motion.div>
      
              <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <IoLogoJavascript className="md:text-7xl text-2xl text-yellow-400"/>
                  <p>Javascript</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiPug className="md:text-7xl text-2xl text-amber-900"/>
                  <p>Pug</p>
              </motion.div>
      
              <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <RiTailwindCssFill className="md:text-7xl text-2xl text-blue-400"/>
                  <p>Tailwind</p>
              </motion.div>
      
              <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <FaBootstrap className="md:text-7xl text-2xl text-purple-600"/>
                  <p>Bootstrap</p>
              </motion.div>
      
              <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <BsFiletypeScss className="md:text-7xl text-2xl text-purple-700"/>
                  <p>SCSS</p>
              </motion.div>
      
              <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <DiJqueryLogo className="md:text-7xl text-2xl text-blue-700"/>
                  <p>Jquery</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <TbBrandNextjs className="md:text-7xl text-2xl"/>
                  <p>Next.js</p>
              </motion.div>
      
              <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <RiReactjsLine className="md:text-7xl text-2xl text-cyan-400"/>
                  <p>React.js</p>
              </motion.div>
      
              <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiThreedotjs className="md:text-7xl text-2xl"/>
                  <p>Three.js</p>
              </motion.div>
      
              <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <IoLogoFigma className="md:text-7xl text-2xl text-green-400"/>
                  <p>Figma</p>
              </motion.div>
      
              <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiVite className="md:text-7xl text-2xl text-purple-700"/>
                  <p>Vite</p>
              </motion.div>
      
              <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <TbBrandFramerMotion className="md:text-7xl text-2xl text-pink-600"/>
                  <p>Framer Motion</p>
              </motion.div>
            </div>
        </motion.div>

        {/* Backend */}
        <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:1}} transition={{duration:1.2}} className='flex flex-col m-1 p-1 w-2/5 max-flex:w-full items-center'>
            <h1 className='md:my-28 my-16 text-center text-2xl'>Backend</h1>
            <div className='flex flex-wrap items-center justify-center'>
              <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                <FaNodeJs className="md:text-7xl text-2xl text-green-700"/>
                <p>Node.js</p>
              </motion.div>

              <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiExpress className="md:text-7xl text-2xl text-yellow-400"/>
                  <p>Express.js</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiPassport className="md:text-7xl text-2xl text-cyan-400"/>
                  <p>Passport.js</p>
              </motion.div>

              <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                <SiMongodb className="md:text-7xl text-2xl text-green-500"/>
                <p>MongoDB</p>
              </motion.div>

              <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <BiLogoPostgresql className="md:text-7xl text-2xl text-sky-700"/>
                  <p>SQL</p>
              </motion.div>

              <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <TbBrandOauth className="md:text-7xl text-2xl text-zinc-700"/>
                  <p>O-Auth</p>
              </motion.div>
            </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:1}} transition={{duration:1.2}} className='flex flex-col m-1 p-1 w-2/5 max-flex:w-full items-center'>
            <h1 className='md:my-28 my-16 text-center text-2xl'>Programming Languages</h1>
            <div className='flex flex-wrap items-center justify-center'>
              <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                <FaJava className="md:text-7xl text-2xl text-blue-700"/>
                <p>Java</p>
              </motion.div>

              <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <TbBrandCpp className="md:text-7xl text-2xl text-yellow-400"/>
                  <p>C-Programming</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <TbBrandCpp className="md:text-7xl text-2xl text-blue-500"/>
                  <p>C++</p>
              </motion.div>

              <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <FaPython className="md:text-7xl text-2xl text-yellow-400"/>
                  <p>Python (Basic)</p>
              </motion.div>
            </div>
        </motion.div>

        {/* Editing */}
        {/* <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:1}} transition={{duration:1.2}} className='flex flex-col m-1 p-1 w-2/5 max-flex:w-full items-center'>
            <h1 className='my-28 text-center text-2xl'>Editing</h1>
            <div className='flex flex-wrap items-center justify-center'>
              <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                <SiAdobephotoshop className="text-7xl text-blue-900"/>
                <p>Photoshop</p>
              </motion.div>

              <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                  <SiGimp className="text-7xl text-stone-700"/>
                  <p>Gimp</p>
              </motion.div>

              <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                <SiCanva className="text-7xl text-blue-400"/>
                <p>Canva</p>
              </motion.div>

              <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                  <SiAdobelightroom className="text-7xl text-blue-950"/>
                  <p>Lightroom</p>
              </motion.div>

              <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                  <SiAdobepremierepro className="text-7xl text-purple-800"/>
                  <p>Premiere Pro</p>
              </motion.div>

              <motion.div variants={iconVariants(1.3)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                  <SiDavinciresolve className="text-7xl text-red-600"/>
                  <p>Da Vinci Resolve</p>
              </motion.div>

              <motion.div variants={iconVariants(3.6)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-4 icon'>
                  <RiBlenderLine className="text-7xl text-orange-600"/>
                  <p>Blender</p>
              </motion.div>
            </div>
        </motion.div> */}

        {/* Others */}
        <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:1}} transition={{duration:1.2}} className='flex flex-col m-1 p-1 w-2/5 max-flex:w-full items-center'>
            <h1 className='md:my-28 my-16 text-center text-2xl'>Others</h1>
            <div className='flex flex-wrap items-center justify-center'>
              <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                <VscVscode className="md:text-7xl text-2xl text-blue-500"/>
                <p>VS Code</p>
              </motion.div>

              <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiPycharm className="md:text-7xl text-2xl text-green-500"/>
                  <p>Pycharm</p>
              </motion.div>
      
              <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <FaGitSquare className="md:text-7xl text-2xl text-orange-700"/>
                  <p>Git</p>
              </motion.div>
              <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <FaGithubSquare className="md:text-7xl text-2xl"/>
                  <p>Github</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiFirebase className="md:text-7xl text-2xl text-yellow-500"/>
                  <p>Firebase</p>
              </motion.div>
      
              <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiPostman className="md:text-7xl text-2xl text-orange-500"/>
                  <p>Postman</p>
              </motion.div>
      
              <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <DiHeroku className="md:text-7xl text-2xl text-violet-800"/>
                  <p>Heroku</p>
              </motion.div>
      
              <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <BiLogoNetlify className="md:text-7xl text-2xl text-emerald-400"/>
                  <p>Netlify</p>
              </motion.div>
      
              <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className='rounded-2xl border-b border-neutral-800 p-2 icon'>
                  <SiVercel className="md:text-7xl text-2xl"/>
                  <p>Vercel</p>
              </motion.div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech