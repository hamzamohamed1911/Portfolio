'use client'
import { motion, useScroll ,useInView} from "framer-motion";
import { SKILLS } from "../_constants"
import Brain from "../_components/Brain"
import { useRef } from "react";
import ResumeDownloadButton from "../_components/ResumeDownloadButton";
const About = () => {
   
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();

  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
 

 
 return (
    <motion.div 
    
    className='h-full'
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}>
      {/*Container*/}
     <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
{/* text Container*/}
 
<div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48  xl:gap-64 lg:w-2/3  lg:pr-0 xl:1/2">

    {/* biography Container*/}
 
      
        <div className="flex flex-col gap-12 justify-center " >
      <h1 className="text-2xl text-blue-900 font-sans font-bold ">
      BIOGRAPHY
      </h1>

      <p className="text-blue-900  font-roboto  text-lg ">
      Hamza muhamed is a passionate and experienced web developer specializing in front-end development using React.js and Next.js. With a Bachelor&apos;s degree in Computer Science from Al shorouk academy 
      <span>  Hamza embarked on his journey into the world of web development.   </span>

      </p>
      <span className="text-blue-900 font-bold italic text-lg ">
      Motivated by the belief that every line of code has the potential to change the world
      </span>
     
        </div>  
        <ResumeDownloadButton/>
    {/* skills Container*/}
    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>

       <motion.h1 
      
       initial={{x:'-300px'}} 
       animate={isSkillRefInView ?{x:0} :{}} 
       transition={ {delay:0.3}}
       className="text-2xl text-blue-900 font-sans font-bold ">
         SKILLS
      </motion.h1>
      {/* skills list*/}

   <motion.div   
     
      initial={{x:'-900px'}} 
      animate={isSkillRefInView ?{x:0} :{}}  
      transition={ {delay:0.3}}
      className="flex gap-4 flex-wrap ">
      {SKILLS.map((skill )=>(

    <div key={skill.id}
       className="rounded p-3 text-sm cursor-pointer bg-blue-500 text-white  hover:text-blue-500 hover:bg-white  transition-all hover:-translate-y-1 hover:scale-110 duration-300 "> 

      <div className="flex items-center gap-1">
         <span className="h-8 w-8">
         {skill.ico}
         </span>
         {skill.skill}

      </div>

      </div>

               ))}

    </motion.div>
       {/* skills svg*/}
       <div></div>
    </div>
    
    {/* Experience Container*/}
   <div className=" flex flex-col gap-12 justify-center " ref={experienceRef}>
   <motion.h1 
     initial={{x:'-400px'}}
     animate={isExperienceRefInView ?{x:"0"}:{} }
     transition={{delay:0.2}}
     className="text-2xl text-blue-900 font-sans font-bold ">
      EXPERIENCE
    </motion.h1>

      {/* Experience list*/}
 <motion.div  
    initial={{x:'-400px'}}
  animate={isExperienceRefInView ?{x:"0"}:{} }> 


        {/* Experience list item*/}


    <div className="flex justify-between h-48">

            {/* LEFT*/} 
           <div className=" w-1/3">
                 <div>
                  <h6 className="bg-blue-100 text-blue-900 p-3 font-semibold rounded-b-lg rounded-s-lg">junior JavaScript developer  </h6>
                  <p className="p-3 text-sm italic text-blue-900">my current employment . may better that the postion before !</p>
                  <p className="p-3 text-blue-400 text-sm  font-semibold">2024 - present</p> 
                  <h6 className="p-1 rounded text-blue-900 bg-blue-100 text-sm font-semibold w-fit"> Apple</h6>
                  </div>
            </div>

              {/* Cetner*/}
         <div className=" w-1/6">
                {/* line*/}
                 <div className="w-1 h-full bg-gray-500 rounded relative "> 
                  {/* circle*/}
                  <div className="text-center font-bold  absolute w-6 h-6 rounded-full ring-4 ring-blue-400 bg-white -left-2">
                     1
                  </div> 

                 </div> 
           </div>
              {/* right*/}
          <div className=" w-1/3" > </div>

     </div>


            {/* Experience list item*/}
<div className="flex justify-between h-48">

      {/* LEFT*/} 

         <div className=" w-1/3">
         
         </div>


{/* Cetner*/}

   <div className=" w-1/6">
   {/* line*/}
      <div className="w-1 h-full bg-gray-500 rounded relative "> 
      {/* circle*/}
      <div className="text-center font-bold  absolute w-6 h-6 rounded-full ring-4 ring-blue-400 bg-white -left-2">
            2
      </div> 

      </div> 
   </div>

      {/* right*/}
      <div className=" w-1/3" >  <div>
         <h6 className="bg-blue-100 text-blue-900 p-3 font-semibold rounded-b-lg rounded-s-lg">junior JavaScript developer  </h6>
         <p className="p-3 text-sm italic text-blue-900">my current employment . may better that the postion before !</p>
         <p className="p-3 text-blue-400 text-sm  font-semibold">2024 - present</p> 
         <h6 className="p-1 rounded text-blue-900 bg-blue-100 text-sm font-semibold w-fit"> Apple</h6>
         </div>
      </div>


 </div>



  {/* Experience list item*/}
    <div className="flex justify-between h-48">

            {/* LEFT*/} 
            <div className=" w-1/3">
               <div>
               <h6 className="bg-blue-100 text-blue-900 p-3 font-semibold rounded-b-lg rounded-s-lg">junior JavaScript developer  </h6>
               <p className="p-3 text-sm italic text-blue-900">my current employment . may better that the postion before !</p>
               <p className="p-3 text-blue-400 text-sm  font-semibold">2024 - present</p> 
               <h6 className="p-1 rounded text-blue-900 bg-blue-100 text-sm font-semibold w-fit"> Apple</h6>
               </div>
            </div>
            {/* Cetner*/}
            <div className=" w-1/6">
            {/* line*/}
               <div className="w-1 h-full bg-gray-500 rounded relative "> 
               {/* circle*/}
               <div className="text-center font-bold absolute w-6 h-6 rounded-full ring-4 ring-blue-400 bg-white -left-2">
                  3
               </div> 

               </div> 
            
            </div>
            {/* right*/}
            <div className=" w-1/3" > </div>

    </div>
          
      </motion.div >
  
   </div>

</div> 


{/* svg Container*/}
   <div className="hidden lg:block w-1/3 sticky top-0 z-50 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
   </div>
     </div>
     </motion.div>
  )
}

export default About