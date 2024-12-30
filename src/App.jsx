import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Tech from './components/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 left-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto md:px-8 px-3">
          <Navbar/>
          <Hero/>
          <About/>
          <Tech/>
          <Experience/>
          <Education/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
  )
}

export default App
