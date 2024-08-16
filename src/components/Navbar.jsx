import React from 'react'
import Logo from "../assets/Delivr.png"
import { FaSearch ,FaShoppingCart,FaUser } from "react-icons/fa";
import { IoHelpOutline } from "react-icons/io5";
const Navbar = () => {

  const listClass="flex gap-3 items-center cursor-pointer"
  return (
    <div className='bg-slate-900 flex h-[100px] py-5 items-center px-40 justify-between box-border sticky top-0 left-0 right-0 shadow-md z-30'>
        <img src={Logo} alt="" className='h-3/4'/>
        <ul className='flex gap-10 text-lg text-white'>
            <li className={listClass}><FaSearch className='text-md'/>Search</li>
            <li className={listClass}><IoHelpOutline className='text-md'/>Help</li>
            <li className={listClass}><FaUser className='text-md'/>Sign In</li>
            <li className={listClass}><FaShoppingCart className='text-md'/>Cart</li>
        </ul>
    </div>
  )
}

export default Navbar
