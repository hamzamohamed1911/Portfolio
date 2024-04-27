"use client"
import { motion ,useScroll ,useTransform} from "framer-motion";
import {  useRef } from "react";
import Image from 'next/image';
import { arrowDown, cloud, moon } from "../../../public";
import { PROJECTS } from "../_constants";
import Link from 'next/link'
import Button from "../_components/Button";
import { useDark } from "../_store/ThemeProvider";

const Portfolio = () => {
const ref = useRef();
const {dark} =useDark()

const scrollBottom = () => {
  const scrollDistance = 600;
  window.scrollBy({
    top: scrollDistance,
    behavior: "smooth"
  });
};

const { scrollYProgress}= useScroll({target:ref})
const x = useTransform(scrollYProgress, [0,1], ["0%", " -87%"])

  return (
    <motion.div 
     className='h-full'
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}>
      <div className="h-[600vh] relative" ref={ref}>
      <div className={`w-screen h-[calc(100vh-6rem)] font-bold flex items-center justify-center text-5xl sm:text-6xl text-center ${dark ? "text-white" :"text-blue-900"}`}>
     <div className="flex flex-col items-center justify-center"> 
    <h1 className="pb-32">MY Projects</h1>
      <motion.button onClick={scrollBottom}>
      <Image className="h-28 w-28  animate-bounce" alt="arrowDown" src={arrowDown} />
      </motion.button>
  </div>
</div>

        

        <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
          <motion.div style={{x}} className="flex">

           <div className="-mx-4 flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-300 to-blue-400 ">

           </div>


           <div className="flex items-center pr-10  justify-center w-screen h-screen bg-gradient-to-r from-blue-400 to-blue-500">
    <div className="text-center">
        <Image
            alt="moon"
            height={500}
            width={500}
            src={cloud}
            className="animate-pulse lg:self-center lg:mr-4 sm:h-300 sm:w-300 filter brightness-75"
        />
        <h1 className="text-5xl sm:text-6xl pt-6 font-bold animate-bounce text-slate-100">
            Let&apos;s start
        </h1>
    </div>
</div>


          <div className="sticky top-10 flex h-screen gap-20 items-center">
            <div className="flex">
             {PROJECTS.map((project)=>(
              <div className={`-mx-1  px-10 h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color} `} key={project.id}>
                <div className="p-20 flex flex-col  text-white">
                  <h1 className="text-4xl pb-6 font-semibold">{project.title} </h1>
                  <Link href={project.DomainLink} className="relative">
                    <Image alt="project" className="object-contain rounded-md hover:brightness-90" src={project.src} height={500} width={500}/>
                  </Link>
                  <p className="py-6 text-xl w-96 h-56 sm:text-2xl">{project.description}</p>
                <div className="flex gap-4 lg:w-full">
                  <Link href={project.DomainLink}>
                    <Button label="see Demo" backgroundColor/>
                  </Link>
                  <Link href={project.GithubLink}>
                    <Button label="see Code"/>
                  </Link>
                </div>
                </div>
              </div>
              ))}
              </div>
          </div>

          <div   className="bg-cover  bg-center flex items-center justify-center -mx-1 w-screen h-screen bg-gradient-to-r from-blue-950 to-slate-950 ">

<div className="text-center">
    <Image
        alt="moon"
        height={500}
        width={500}
        src={moon}
        className="animate-pulse lg:self-center lg:mr-4 sm:h-300 sm:w-300"
    />
    <h1 className="pt-4 text-5xl sm:text-6xl font-bold text-center text-slate-100 animate-bounce">
        THE END
    </h1>
</div>

</div>

          </motion.div>
        </div>

      </div>
     </motion.div>
  )
}

export default Portfolio;