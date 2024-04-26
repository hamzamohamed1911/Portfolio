'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDark } from '../_store/ThemeProvider';


const NavLink = ({link}) => {
    const pathName =usePathname();
    const { dark } = useDark();

  return (
    <Link  href={link.url} className={`rounded p-2 ${dark ?"text-white":"text-blue-900 "} transition-all hover:-translate-y-1 hover:scale-110 duration-300  ${pathName  === link.url &&"bg-blue-500 hover:bg-blue-600  text-white"} `}>
        {link.title}
    </Link>
  )
}

export default NavLink ; 