import React, { useState,useEffect } from 'react'
import Logo from "../assets/Delivr.png"
import { FaSearch ,FaShoppingCart,FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHelpOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import { Link ,useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate()
  const [isMenuActive,setIsMenuActive]=useState(false)
  const menuHandler=(e)=>{
    e.preventDefault()
    setIsMenuActive((prev)=>!prev)
  }
  const listClass="flex gap-3 items-center cursor-pointer"
  return (
    <>    <div className='box-border sticky top-0 left-0 right-0 z-30 flex items-center justify-between px-10 py-5 shadow-md md:flex-row bg-slate-900 lg:px-40 h-[80px]'>
        <img src={Logo} alt="" className='md:h-[40px] h-[30px]' onClick={()=>navigate('/')}/>
        <ul className='hidden gap-10 text-sm text-white md:flex md:text-lg '>
            <Link to={'/search'} className={listClass} ><FaSearch className='text-md'/>Search</Link>
            <Link to={'/help'} className={listClass}><IoHelpOutline className='text-md'/>Help</Link>
            <Link to={'/login'} className={listClass}><FaUser className='text-md'/>Sign In</Link>
            <Link to={'/cart'} className={listClass}><FaShoppingCart className='text-md'/>Cart</Link>
        </ul>
        <span className='flex lg:hidden'><RxHamburgerMenu className='text-xl font-semibold text-white cursor-pointer' onClick={menuHandler}/></span>
    </div>
    <AnimatePresence>
    {isMenuActive && <motion.div className='sticky z-20 bg-slate-900 top-[80px]  text-white text-md flex flex-col ' initial={{y:-200,opacity:0}}animate={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:0.2, bounce:0}} exit={{y:-200,opacity:0}}>
           <Link to={'/search'} className={`${listClass} w-full py-2 hover:bg-slate-600  px-10`}><FaSearch className='text-md'/>Search</Link>
            <Link to={'/help'} className={`${listClass} w-full py-2 hover:bg-slate-600 px-10`}><IoHelpOutline className='text-md'/>Help</Link>
            <Link to={'/login'} className={`${listClass} w-full py-2 hover:bg-slate-600 px-10`}><FaUser className='text-md'/>Sign In</Link>
            <Link to={'/cart'} className={`${listClass} w-full py-2 hover:bg-slate-600 px-10 pb-4 `}><FaShoppingCart className='text-md'/>Cart</Link>
    </motion.div>}
    </AnimatePresence>
    </>

  )
}

export default Navbar
