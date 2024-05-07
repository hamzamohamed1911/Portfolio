import Button from '@/app/_components/Button'
import { PROJECTS } from '@/app/_constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
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
  )
}

export default Projects