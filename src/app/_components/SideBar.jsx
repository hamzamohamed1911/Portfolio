"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  FaMoon ,FaSun} from 'react-icons/fa';
import { IoIosArrowBack ,IoIosArrowForward ,IoMdSettings  } from "react-icons/io";
import { useDark } from '../_store/ThemeProvider';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
   const {dark ,toggleNightMode ,setDark} =useDark()
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="fixed top-1/4 right-0 z-20">

        <div className=" mr-1 transition hover:-translate-x-3  duration-200 ">
          {!isOpen && (
            <button onClick={toggleSidebar}><IoIosArrowBack className= " bg-blue-600 text-white rounded-md " size={24} /></button>
          )}
        </div>
    
        <AnimatePresence>
          {isOpen && (
           <motion.div
           initial={{  x: '100%' }}
           animate={{ x: 0 }}
           exit={{  x: '100%' }}
           transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
           className= " relative bg-gray-200 shadow-md p-6 rounded-lg"
           whileHover={{ translateX: 12 }} 
         >
          

           <div   className=" flex flex-col gap-4 items-center">

            <button onClick={toggleNightMode}> 
            {dark ? (<FaSun className="text-blue-600 cursor-pointer" size={24} />) :  <FaMoon className="text-blue-600 cursor-pointer" size={24} />}
            </button>
             <IoMdSettings onClick={()=>(setDark(false))}  className="text-gray-600 cursor-pointer" size={24}/> 

             <button onClick={toggleSidebar} className="absolute bg-blue-600 text-white rounded-md -left-8 top-1/4">
             <IoIosArrowForward size={24} />
           </button>

           </div>
         </motion.div>
          )}
        </AnimatePresence>
      
      </div>
    );
  };
  

export default Sidebar;
