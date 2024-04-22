'use client'
import React from 'react';

const Button = ({label, backgroundColor,textColor,borderColor,fullWidth, handleClick}) => {
  return (
    <button
    onClick={handleClick}
    className={`flex justify-center text-white items-center sm:gap-2 gap-1 sm:px-7 px-4 sm:py-4 py-3 border  text-md sm:text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-blue-500  border-coral-red"
      } rounded-md ${fullWidth && "w-full"}`}
    >
      {label}

    </button>
  )
}

export default Button;