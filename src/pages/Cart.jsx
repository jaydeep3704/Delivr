import React, { useEffect, useState } from "react";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/emptyCart.jpg"
import { updateTotal } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {


  const cartItems=useSelector((store)=>store.cart.items) 
  const [isChecked,setIsChecked]=useState(false)
  const resId=useSelector((store)=>store.cart.resId)
  const {restaurantInfo}=useRestaurantMenu(resId)
  const dispatch=useDispatch()
  const navigate=useNavigate()
 
  dispatch(updateTotal())
  const totalPrice=useSelector((store)=>store.cart.totalPrice)
  const deliveryFee=restaurantInfo?.feeDetails?.amount/100 || 60
 
  const discount=35
  console.log(restaurantInfo)

  
  return cartItems.length>0 ?   
  (
    <div className="flex flex-wrap justify-between w-full h-screen px-5 py-10 bg-gray-100 lg:px-40">
      <div className="md:w-[65%] w-full  flex flex-col gap-5">
        <div className="w-full bg-white h-[150px] shadow-sm rounded-lg relative flex gap-40 p-10 items-center">


          <div className="absolute top-1/2 left-[-10px] p-3 bg-white shadow-lg translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <div className="ml-5 text-xl font-semibold text-gray-500">Delivery Address</div>
        </div>
        
        <div className="w-full bg-white h-[150px] shadow-sm rounded-lg relative flex gap-40 p-10 items-center">
            <div className="absolute top-1/2 left-[-10px] p-3 bg-white shadow-lg translate-y-[-50%]">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <div className="ml-5 text-xl font-semibold text-gray-500">Choose Payment Method</div>
        </div>
      </div>

      {/* cart */}
      <div className="w-full md:w-[30%] bg-white shadow-sm rounded-lg" >
        
        <div className="flex gap-5 px-10 py-5" onClick={()=>navigate(`/restaurants/${resId}`)} >
            <div className="w-16 h-16">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${restaurantInfo.cloudinaryImageId}`} alt="" className="object-cover w-full h-full"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{restaurantInfo.name}</h3>
                <div className="text-gray-600 text-md">{restaurantInfo.locality}</div>
            </div>
        </div>

        <div className="w-full h-[600px]  px-10 overflow-y-scroll">

            {
                cartItems.map((item)=>{
                    const {name,price,itemCount,resId,vegClassifier,id}=item
                    return <CartItem name={name} price={price} resId={resId} vegClassifier={vegClassifier} itemCount={itemCount} id={id}/>
                })
            }
            <div className="flex items-start p-4 mt-5 border border-gray-500 gap-x-4">
                <input type="checkbox" className="mt-[5px] " checked={isChecked}onChange={(e)=>setIsChecked(e.target.checked)} />
                <div className="">
                    <div className="font-semibold text-[16px]">Opt In for No Contact Delivery</div>

                    {
                        isChecked ?<div className="text-sm text-gray-600">    Our delivery partner will call to confirm. Please ensure that your address has all the required details.</div>:
                        <div className="text-sm text-gray-600">    Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</div>
                    }
                </div>

            </div>
                <div className="flex flex-col w-full gap-3 py-3 mt-5 border-b-2 border-black">
                    <div className="font-semibold ">Bill Details</div>
                    <div className="flex justify-between text-gray-600">Item Total  <span className="font-semibold text-green-600">₹ {totalPrice.toFixed(2)}</span></div>
                    <div className="flex justify-between text-gray-600">Delivery Fee  <span className="font-semibold ">₹ {deliveryFee }</span></div>
                    <div className="flex justify-between text-gray-600">Extra Discount For You  <span className="font-semibold ">-₹{discount}</span></div>
                </div>
                <div className="flex justify-between py-5 text-lg font-bold uppercase"><span>To Pay</span> <span>₹ {(totalPrice+deliveryFee-discount).toFixed(2)}</span></div>
            </div>
        </div>


      </div>
   
  ) : <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
        <img src={EmptyCart} alt="" className="w-[400px]"/>
        <div className="flex flex-col items-center gap-3">
            <div className="text-xl font-semibold">Your Cart is Empty</div>
            <p className="text-gray-600 text-md">You can go to home page to view more restaurants</p>
            <button className="px-10 py-2 mt-5 text-lg font-semibold text-white uppercase bg-orange-600 border-none outline-none" onClick={()=>navigate('/')}>see restaurants near you</button>
        </div>
  </div>
};

export default Cart;
