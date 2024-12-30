import React from 'react'
import { motion } from "motion/react"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Contact = () => {
  const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_gdgfuhe', 'template_3gxzqbh', form.current, {
          publicKey: 'oc91nUr08-o6OefuT',
        }).then(() => {
            console.log('SUCCESS!');
            // confirm("Query Sent Successfully!");
          },
          (error) => {
            console.log('FAILED...', error.text);
            // confirm("Query submission failed!");
          },
        );
    };

    const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      message: "",
    });

      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const submitQuery = async (query) => {
      try {
        await addDoc(collection(db, "Queries"), formData);
        alert("Query submitted successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      } catch (error) {
        console.error("Error adding query: ", error);
        alert("Failed to submit query.");
      }
    };

    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(e); // Call the email sending function
    await submitQuery(); // Call the Firestore submission function
  };

  return (
    <div className='border-b border-neutral-900 pb-4 min-h-screen flex flex-wrap flex-col justify-center items-center' id='contact'>
      <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-14 text-center text-4xl'>Get in <span className='text-neutral-500'>Touch</span></motion.h1>

      <form ref={form} onSubmit={handleSubmit} className="space-y-4 w-1/2 max-flex:w-[90%] max-flex:p-8 p-16 text-left flex flex-col justify-center rounded-xl bg-white/5 backdrop-blur-md">
          {/* Name Field */}
          <div className='my-2'>
            <motion.label whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-60}} transition={{duration:1.5}} className="block text-lg font-medium text-white" htmlFor="name">Your Name</motion.label>
            <motion.input type="text" name="user_name" value={formData.user_name} onChange={handleChange} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.6}} transition={{duration:0.5}} id="name" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Enter your name" required/>
          </div>

          {/* Email Field */}
          <div className='my-2'>
            <motion.label whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-60}} transition={{duration:1.5}} className="block text-lg font-medium text-white" htmlFor="email">Your Email</motion.label>
            <motion.input type="email" name="user_email" value={formData.user_email} onChange={handleChange} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.6}} transition={{duration:0.5}} id="email" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Enter your email" required/>
          </div>

          {/* Query Section */}
          <div className='my-2'>
            <motion.label whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-60}} transition={{duration:1.5}} className="block text-lg font-medium text-white" htmlFor="query">Your Query</motion.label>
            <motion.textarea name="message" value={formData.message} onChange={handleChange} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.6}} transition={{duration:0.5}} id="query" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Write your query here" rows="4" required></motion.textarea>
          </div>

          {/* Submit Button */}
          <div className="my-6 text-center flex justify-start">
            <motion.button type="submit" value="send" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.6}} transition={{duration:0.5}} className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md shadow-lg">Send Query</motion.button>
          </div>
        </form>
    </div>
  )
}

export default Contact