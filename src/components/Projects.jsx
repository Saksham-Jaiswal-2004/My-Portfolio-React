import React from 'react'
import { motion } from "motion/react"
import { PROJECTS } from '../constants'
// import { FaLink } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='min-h-screen border-b border-neutral-900 pb-4' id='projects'>
      <motion.h1  whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className='my-28 text-center text-4xl'>Projects</motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center text-left'>
                <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='lg:w-1/4 w-full'>
                    <img src={project.image} height={150} width={150} alt={project.title} className='mb-6 rounded'/>
                </motion.div>

                <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='text-neutral-400'>{project.description}</p>

                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 cursor-pointer'>{tech}</span>
                      ))}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" ><FaGithub className=' mx-1 my-4 rounded bg-neutral-900 px-1 py-1 w-fit text-xl font-medium text-purple-900 cursor-pointer'/></a>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
