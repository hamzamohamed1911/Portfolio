"use client"
import { motion, AnimatePresence } from "framer-motion"
import NavBar from "./NavBar"
import { usePathname } from "next/navigation"
import Sidebar from "./SideBar"
import { useDark } from "../_store/ThemeProvider"


const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const { dark } = useDark(); 

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={`w-screen h-screen ${dark ? ' bg-gradient-to-b from-blue-800 to-slate-800' : 'bg-gradient-to-b from-blue-200 to-blue-400'}`} // Adjust background color based on dark mode
      >
        <motion.div
          className="h-screen w-screen fixed bg-white rounded-b-[100px] z-30"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className="fixed m-auto inset-0 text-blue-500 text-8xl cursor-default z-40 w-fit h-fit"
          style={{ pointerEvents: 'none' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-white  rounded-t-[100px] buttom-0 z-20"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh ", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)] ">
          <Sidebar />
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
