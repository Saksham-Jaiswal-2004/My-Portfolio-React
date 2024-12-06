import React from 'react'
import '../index.css'
import logo from "../assets/kevinRushLogo.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    // <nav className='z-10 mb-12 flex items-center justify-between py-6 sticky top-0 w-full backdrop-blur-md'>
    <nav className='z-10 mx-4 flex items-center justify-between py-4 fixed top-0 left-0 w-full backdrop-blur-md'>
        <div className='flex flex-shrink-0 items-center'>
            <Link to="home" smooth={true} duration={500} offset={-100}><img src={logo} alt="" /></Link>
        </div>

        <div className='mx-8 flex items-center justify-center gap-4'>
          <ul className='mx-5 flex items-center justify-center gap-6 text-l'>
            <Link to="home" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Home</li></Link>
            <Link to="about" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>About</li></Link>
            <Link to="technologies" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Technologies</li></Link>
            <Link to="experience" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Experience</li></Link>
            {/* <Link to="education" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Education</li></Link> */}
            <Link to="projects" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Projects</li></Link>
            <Link to="contact" smooth={true} duration={500} offset={-100} className="mx-1 navLink"><li>Query</li></Link>
          </ul>

          <Link to="footer" smooth={true} duration={500} offset={-100} className='border border-neutral-400 p-2 rounded-2xl mx-2 text-neutral-400 btn cursor-pointer'>Say Hello</Link>
        </div>
    </nav>
  )
}

export default Navbar
