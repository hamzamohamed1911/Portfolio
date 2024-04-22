"use client"
import Image from 'next/image';
import { hero } from "../../public";
import Button from './_components/Button';
import{ motion } from "framer-motion"
import TypingText from './_components/TypingText';
import { useRouter } from 'next/navigation'


const Homepage = () => { 
 
  const router = useRouter()

 
  const texts = ["Software Engineer", "React.js Developer"];

  return(
    <motion.div 
    key="Home"
    className='h-full'
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}>
    
    <div className=" h-full flex flex-col px-4  lg:flex-row sm:px-8 md:px-12 lg:px-20 xl-px-48 ">
      {/*Image container*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
        <Image alt="hero"  src={hero} fill className='object-contain'/>
      </div> 
       {/*Text container*/}
  
       <div className=" flex flex-col lg:h-full lg:w-1/2   gap-8 items-center justify-center ">
      
        
      <div className='pt-4'>
      <TypingText   texts={texts} /> 

      </div>
        
        <p className='text-blue-900  font-roboto font-light text-lg sm:text-2xl px-4'>
        Hello! My Name Is Hamza muhammed , a dedicated React.js and Next.js developer with a strong foundation in computer science. Graduating from the Faculty of Computer Science has equipped me with a solid understanding of fundamental programming concepts, which I apply in my work to create innovative web applications. 
        </p>
        <div className='flex gap-4 lg:w-full'>
          <Button handleClick={() => router.push('/portfolio')} label=" Veiw my work" />
           
          <Button handleClick={() => router.push('/contact')} backgroundColor label="Contact me" /> 
            
          
        </div>
     </div>
    </div>
    </motion.div>
  ) 

};

export default Homepage;
