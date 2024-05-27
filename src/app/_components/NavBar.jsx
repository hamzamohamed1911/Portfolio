'use client'
import Link from "next/link";
import { Links, icons } from "../_constants";
import { useState } from "react";
import { motion } from "framer-motion"
import NavLink from "./NavLink.jsx";
import { useDark } from "../_store/ThemeProvider";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { dark } = useDark(); 
  
  const topVariants={
    closed:{rotate:0},
    opened:{rotate:45}
  }
  const centerVariants={
    closed:{opacity:1},
    opened:{opacity:0}
  }
  const buttonVariants={
    closed:{rotate:0},
    opened:{rotate:-45}
  }

  const listVariants = {
    closed:{x:'100vw'},
    opened:{x:'0', transition : {when:"beforeChildren", staggerChildren:0.2}}
    
  }
  const listItemVariants ={
    closed:{x:-10 ,opacity:0},
    opened:{x: 0 ,opacity:1}

  }
  return (
    <header className='py-4 w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
      
     {/*links*/}
       <div className="hidden md:flex gap-4 text-2xl z-10">
           {Links.map(link=>(
             <NavLink link={link} key={link.title}/>
            ))}
         </div>

        {/*logo*/}

        <div className="md:hidden flex lg:flex  xl:justify-center ransition-all hover:-translate-y-1 hover:scale-110 duration-300 z-10">
            <Link href="/" className="text-md bg-blue-500  rounded-md p-2 font-semibold flex items-center justify-center"  >
             
              <span className="text-white mr-2">
              PORT
              </span>
              <span className="w-16 h-10 rounded  hover:bg-blue-500 bg-white hover:text-white text-blue-500 flex items-center justify-center">
                FOLIO
              </span>
            </Link>
        </div>

        { /*social Icons */}
        <div className="hidden md:flex gap-5 z-10">
             {icons.map(icon=>(<Link href={icon.url} key={icon.alt}>

              <span className= {`${dark ? "hover:fill-blue-400 fill-blue-200" : "fill-blue-500 hover:fill-blue-700"} `}> {icon.ico}</span>
             </Link>))}
        </div>

        { /* menu button */}
        <div className="md:hidden z-30">
          
     
         <button className="w-10 h-8 flex flex-col justify-between z-20 relative" onClick={(()=>setOpen((prev)=>!prev))}>
          <motion.div  variants={topVariants} animate={open ? "opened" :"closed" } className="w-10 h-1 bg-blue-500 rounded origin-left">

          </motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" :"closed" } className="w-10 h-1 bg-blue-500 rounded">

          </motion.div>
          
          <motion.div variants={buttonVariants} animate={open ? "opened" :"closed" } className="w-10 h-1 bg-blue-500 rounded origin-left">

          </motion.div>
        {/*menu list*/}
         </button>
         
      {open && (
      <motion.div variants={listVariants} initial="closed" animate="opened" className= {`absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8 text-4xl ${dark ? "bg-slate-300 text-blue-500" : " bg-white text-blue-500"} `}>

           <div className=" flex gap-5 ">
             {icons.map(icon=>(<Link href={icon.url} key={icon.alt}>

              <span  > {icon.ico}</span>
             </Link>))}
           </div>

            {Links.map(link=>(
              <motion.div variants={listItemVariants} key={link.title}>
                <Link  href={link.url}>
              {link.title}
              </Link>
              </motion.div>
            ))}
         </motion.div>)}

        </div>
    </header>
  )
}

export default NavBar 