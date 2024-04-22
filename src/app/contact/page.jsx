'use client'
import{ motion } from "framer-motion"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from "react"
const Contact = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false)
        setError(false)
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
            publicKey:  process.env.NEXT_PUBLIC_PUBLIC_KEY,
          })
          .then(
            () => {
             setSuccess(true)
             form.current.reset()
            },
            (error) => {
                setError(true)
            },
          );
      };

  return (
    <motion.div 
    className='h-full  lg:py-32'
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}>
    
  <div className="  h-full px-8 mx-auto max-w-screen-md">
      <h2 className=" text-blue-900 font-sans  mb-10 text-6xl tracking-tight font-extrabold text-center  dark:text-white">Contact Us </h2>
      <p className="text-blue-900  font-roboto font-light text-xl px-4 mb-10 lg:mb-16 text-center   sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form  ref={form} onSubmit={sendEmail} className="space-y-8">
        
          <div>
              <label htmlFor="email" className="block mb-3 text-sm font-medium text-blue-900 ">Your email</label>
              <input name="user_email" type="email" id="email" className="shadow-sm bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required/>
          </div>

          <div>
              <label htmlFor="subject" className="block mb-3 text-sm font-medium text-blue-900 ">Subject</label>
              <input name="to_name" type="text" id="subject" className="block p-3 w-full text-sm text-blue-900 bg-gray-50 rounded-lg border border-blue-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 " placeholder="Let us know how we can help you" required/>
          </div>

          <div className="sm:col-span-2">
              <label htmlFor="user_message" className="block mb-3 text-sm font-medium text-blue-900 ">Your message</label>
              <textarea name="user_message" id="user_message" rows="6" className="block p-2.5 w-full text-sm text-blue-900 bg-gray-50 rounded-lg shadow-sm border border-blue-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
          </div>

          <button  type="submit" value="Send" className=" block py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600  focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
          {success&&<span className=" text-green-600 font-semibold">Your message has been sent successfuly ! </span>}
          {error&&<span className="text-red-600 font-semibold">smothing went Wrong !</span>}

      </form>
  </div>

     </motion.div>
  )
}

export default Contact