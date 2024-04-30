'use client'
import React, { useState, useEffect } from 'react';
import { useDark } from '../_store/ThemeProvider';

const TypingText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const { dark } = useDark(); 

  useEffect(() => {
    
      const animateText = async () => {
        setDisplayText('');
      
        const text = texts[index];

        for (let i = 0; i <= text.length; i++) {
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100)); 
        }
        await new Promise(resolve => requestAnimationFrame(resolve, 2000)); 
        for (let i = text.length; i >= 0; i--) {
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve,100)); 
        }

        setIndex(index === texts.length - 1 ? 0 : index + 1);
      };

      animateText();
      
  }, [index]);

  return (
    <h1 
     className= {` font-sans font-bold text-3xl sm:text-5xl ${dark ? " text-white" : "text-blue-900"} `} >
      I am a  {displayText}
    </h1>
  );
};

export default TypingText;
