'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TypingText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const controls = useAnimation();


  useEffect(() => {
    if (controls) { 
      const animateText = async () => {
        setDisplayText('');
        await controls.start({ opacity: 0 });
        await controls.start({ opacity: 1 });
        const text = texts[index];

        for (let i = 0; i <= text.length; i++) {
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 120)); 
        }

        for (let i = text.length; i >= 0; i--) {
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve,120)); 
        }

        setIndex(index === texts.length - 1 ? 0 : index + 1);
      };

      animateText();
      
    }
    return () => {
      controls.stop(); // Stop ongoing animations
    }
  }, [texts, index, controls]);

  return (
    <motion.h1 
    className='text-4xl text-blue-900 font-sans font-bold sm:text-6xl'
     animate={controls} 
     initial={{ opacity: 0 }}>
      I am a  {displayText}
    </motion.h1>
  );
};

export default TypingText;
