"use client"
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleNightMode = () => {
    setDark(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleNightMode ,setDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDark = () => useContext(ThemeContext);
