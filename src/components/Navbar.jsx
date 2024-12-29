import React from 'react'
import { useState } from 'react';
import '../index.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='z-10 mx-4 flex items-center justify-between py-2 fixed top-0 left-0 w-full backdrop-blur-md'>
          <div className='flex flex-shrink-0 items-center'>
              <Link to="home" smooth={true} duration={500} offset={-100}><h6 className='h-full w-fit text-2xl cursor-pointer'>Saksham Jaiswal</h6></Link>
          </div>
  
          <div className='mx-8 flex items-center justify-center gap-4'>
            <ul className='hidden mx-5 sm:flex items-center justify-center gap-6 text-base'>
              <Link to="home" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Home</li></Link>
              <Link to="about" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>About</li></Link>
              <Link to="technologies" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Technologies</li></Link>
              <Link to="experience" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Experience</li></Link>
              <Link to="education" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Education</li></Link>
              <Link to="projects" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Projects</li></Link>
              <Link to="contact" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Query</li></Link>
            </ul>
  
            <Link to="footer" smooth={true} duration={500} offset={-100} className='border hidden sm:flex border-neutral-400 p-2 rounded-2xl mx-2 text-neutral-400 btn cursor-pointer'>Say Hello</Link>
            <button className="text-2xl sm:hidden focus:outline-none"onClick={() => setIsOpen(!isOpen)}aria-label="Toggle Menu">{isOpen ? "✖" : "☰"}</button>
          </div>
      </nav>
  
      {/* Overlay Menu */}
      <div className={`fixed top-0 left-0 w-full h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="absolute top-4 right-4 text-3xl focus:outline-none"onClick={() => setIsOpen(false)}aria-label="Close Menu">✖</button>
  
      <ul className='mx-5 items-center justify-center gap-6 text-base'>
        <Link to="home" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>About</li></Link>
        <Link to="technologies" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Technologies</li></Link>
        <Link to="experience" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Experience</li></Link>
        <Link to="education" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Education</li></Link>
        <Link to="projects" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} offset={-100} className="mx-1 navLink" onClick={() => setIsOpen(false)}><li>Query</li></Link>
      </ul>
  
      <Link to="footer" smooth={true} duration={500} offset={-100} className='border border-neutral-400 p-2 rounded-2xl mx-2 text-neutral-400 btn cursor-pointer text-base' onClick={() => setIsOpen(false)}>Say Hello</Link>
    </div>
  </div>
  )
}

export default Navbar
