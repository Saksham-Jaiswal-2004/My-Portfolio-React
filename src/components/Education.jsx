import React from 'react'
import { motion } from "motion/react"

const Education = () => {

  const events = [
    {
      year: "2024 - 2028",
      title: "Indian Institute of Information Technology, Kalyani",
      description: "I'm just starting my journey in Computer Science, exploring the exciting world of programming and technology. In my first year, I've learned the basics of coding and algorithms, and I'm eager to dive deeper into more complex topics. I’ve already gained hands-on experience through small projects, learning HTML, CSS, JavaScript, and React. As I continue to build my skills, I’m excited about the opportunities ahead—whether it’s internships, hackathons, or working on real-world projects to strengthen my understanding of both frontend and backend development",
      logo: "🎓",
      cardLogo: "📘",
    },
    {
      year: "2009 - 2023",
      title: "St. Augustine Day School",
      description: "Throughout my school years, I was actively involved in academics, extracurricular activities, and sports. I had the honor of serving as the school captain, where I honed my leadership and teamwork skills. I won several awards across academics, extracurriculars, and sports, including the prestigious CR Gasper Memorial Award, which is given to the Student of the Year. These experiences not only shaped my leadership abilities but also fueled my passion for learning, collaboration, and striving for excellence in every area.",
      logo: "💻",
      cardLogo: "🖥️",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24 min-h-screen" id="education">
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='mt-28 mb-32 text-center text-4xl'>Education</motion.h1>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Vertical Line */}
        <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0}} transition={{duration:1}} className="absolute left-1/2 top-0 h-3/4 w-1 bg-neutral-400 transform -translate-x-1/2"></motion.div>

        {/* Events */}
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
          
          <div key={index} className={`flex items-center justify-center mb-12 relative ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>

            {/* Logo on Timeline */}
            <motion.div whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0, x:-30}} transition={{duration:1}} className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-violet-900 text-white rounded-full text-2xl shadow-lg" style={{ top: `${(index+1) * 2}rem` }}>{event.logo}</motion.div>

            {/* Card */}
            <motion.div whileInView={{opacity:100, x:0}} initial={{ opacity: 0, x: isLeft ? -100 : 100 }} transition={{duration:0.7}} className={`relative backdrop-blur-md bg-white bg-opacity-5 text-left p-6 my-6 rounded-lg shadow-lg max-flex:max-w-md sm:max-w-lg ${index % 2 === 0 ? "sm:ml-4" : "sm:mr-4"}`}>

              {/* Logo in Card */}
              <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-xl">{event.cardLogo}</div>

              <div className="text-md text-neutral-400">{event.year}</div>
              <div className="text-base font-bold text-purple-100">{event.title}</div>
              <p className="mt-2 text-neutral-400">{event.description}</p>
            </motion.div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Education
