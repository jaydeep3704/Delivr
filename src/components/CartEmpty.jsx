import React from 'react'
import emptyCart from "../assets/emptyCart.jpg"
import { useNavigate } from 'react-router-dom'
const CartEmpty = () => {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
        <img src={emptyCart} alt="" className="w-[400px]"/>
        <div className="flex flex-col items-center gap-3">
            <div className="text-xl font-semibold">Your Cart is Empty</div>
            <p className="text-gray-600 text-md">You can go to home page to view more restaurants</p>
            <button className="px-10 py-2 mt-5 text-lg font-semibold text-white uppercase bg-orange-600 border-none outline-none" onClick={()=>navigate('/')}>see restaurants near you</button>
        </div>
        
  </div>
  )
}

export default CartEmpty
