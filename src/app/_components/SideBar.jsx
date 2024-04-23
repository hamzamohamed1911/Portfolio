"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaMoon } from 'react-icons/fa';
import { IoIosArrowBack ,IoIosArrowForward  } from "react-icons/io";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="fixed top-1/4 right-0 z-20">
        <div className="mr-4 transition hover:-translate-x-3  duration-200 ">
          {!isOpen && (
            <button onClick={toggleSidebar}><IoIosArrowBack className= "transform bg-blue-600 text-white rounded-md " size={24} /></button>
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
           <motion.div
           initial={{ opacity: 0, x: '100%' }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: '100%' }}
           transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
           className="bg-gray-200 shadow-md p-6 rounded-lg"
           whileHover={{ translateX: 12 }} 
         >
           <button onClick={toggleSidebar} className="absolute bg-blue-600 text-white rounded-md top-1/4 transform -translate-x-14">
             <IoIosArrowForward size={24} />
           </button>

           <div className="flex flex-col gap-4 items-center">
             <FaMoon className="text-gray-600 cursor-pointer" size={24} />
             <FaCog className="text-gray-600 cursor-pointer" size={24} />
           </div>
         </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  

export default Sidebar;
