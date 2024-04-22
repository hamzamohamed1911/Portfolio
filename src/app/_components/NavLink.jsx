'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLink = ({link}) => {
    const pathName =usePathname();


  return (
    <Link  href={link.url} className={`rounded p-2 text-blue-900 transition-all hover:-translate-y-1 hover:scale-110 duration-300  ${pathName  === link.url &&"bg-blue-500 hover:bg-blue-600  text-white"} `}>
        {link.title}
    </Link>
  )
}

export default NavLink ; 