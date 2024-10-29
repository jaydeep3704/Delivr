import React, { useEffect, useState,useMemo } from "react";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { useSelector ,useDispatch} from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import PaymentComplete from "../components/PaymentComplete";
import { clearCart, updateTotal } from "../utils/cartSlice";

import { MdOutlineAddLocationAlt } from "react-icons/md";
import { setLocationSearchVisible } from "../utils/locationSlice";
import { IoMdCheckmarkCircle } from "react-icons/io";
import CartEmpty from "../components/CartEmpty";
const Cart = () => {


  const cartItems=useSelector((store)=>store.cart.items) 
  const [isChecked,setIsChecked]=useState(false)
  const [paymentComplete,setPaymentComplete]=useState(false)
  const resId=useSelector((store)=>store.cart.resId)
  const {restaurantInfo}=useRestaurantMenu(resId)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const currentLocation=useSelector((store)=>store.location.currentLocation)
  const{area,district,state}=currentLocation
  dispatch(updateTotal())
  const totalPrice=useSelector((store)=>store.cart.totalPrice)
  const deliveryFee=restaurantInfo?.feeDetails?.amount/100 || 60
  const [addressSelected,setAddressSelected]=useState(false)
  const deliveryTime=restaurantInfo?.sla?.deliveryTime || ""
  



  const discount=35

  const handlePaymentSuccess=(e)=>{

   const timerId= setPaymentComplete(true)
      setTimeout(()=>{
      setPaymentComplete(false)
      clearTimeout(timerId)
    },2500)
    dispatch(clearCart())
   
  }

  const memoizedCallback = useMemo(() => {
    return handlePaymentSuccess;
  }, []);


if(!paymentComplete)
  {return cartItems.length>0 ?   
  (
    <div className="flex flex-wrap justify-between w-full h-screen px-5 py-10 bg-gray-100 lg:px-40">
      <div className="md:w-[65%] w-full  flex flex-col gap-5">
        <div className="relative flex items-center w-full gap-40 p-10 bg-white rounded-lg shadow-sm">


          <div className="absolute top-20 left-[-10px] p-2 bg-[#282C3F] shadow-xl translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="#282C3F"
              stroke="white"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

         {!addressSelected ? 
         (<div className="flex flex-col gap-5 ml-10">
            <div >
              <div className="text-lg font-semibold text-black"> Choose a delivery address</div>
              <div className="text-gray-400 ">To place order now add your address details</div>
            </div>
            <div className="flex gap-5 p-5 border border-gray-300 border-dotted">
                  <div>
                     <MdOutlineAddLocationAlt className="text-3xl text-[#60B246] cursor-pointer" onClick={()=>dispatch(setLocationSearchVisible(true))}/>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-lg font-semibold cursor-pointer" onClick={()=>dispatch(setLocationSearchVisible(true))}>Add New Address</span>
                      <span className="font-semibold text-gray-400">{area}, {district}, {state}</span>
                      <button className=" py-[6px] mt-4 text-center text-white  bg-[#60B246] font-semibold px-7" onClick={()=>setAddressSelected(true)}>Deliver Here</button> 
                  </div>
            </div>
          
          </div>): (<div className="w-full ml-10">
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-center justify-between text-lg font-semibold text-black">
                <div className="flex items-center gap-3">
                Delivery Address <IoMdCheckmarkCircle className="text-2xl text-[#60B246]"/>
                </div>
                 <span className="text-orange-500 font-bold text-[16px] cusror-pointer" onClick={()=>dispatch(setLocationSearchVisible(true))}>CHANGE</span>
                </div>
              <div className="flex flex-col ">
                <span className="text-lg font-semibold text-black">Home</span>
                <span className="font-semibold text-gray-400 text-md">{area}, {district}, {state}</span>
              </div>
              <div className="font-semibold">{deliveryTime} MINS</div>
            </div>
          </div>)
          }

        </div>
        
        {!addressSelected ?(<div className="w-full bg-white h-[150px] shadow-sm rounded-lg relative flex gap-40 p-10 items-center">
            <div className="absolute top-1/2 left-[-10px] p-2 bg-white shadow-lg translate-y-[-50%]">
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
        </div>):(<div className="relative flex items-center w-full gap-40 p-10 bg-white rounded-lg shadow-sm">
            <div className="absolute top-16 left-[-10px] p-2 bg-[#282C3F] shadow-lg translate-y-[-50%]">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="#282C3F"
                stroke="white"
                >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <div className="w-full ml-10">
              <div className="text-lg font-semibold">Choose payment method</div>
              <div className="font-semibold text-gray-400">Credit & Debit cards , UPI or cash on Delivery</div>
              <button className=" py-3 my-5 w-full text-white  bg-[#60B246] font-semibold text-center" onClick={memoizedCallback}>PLACE ORDER</button> 
            </div>
        </div>)
        
        }



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
   
  ) : <CartEmpty/>
}
else{
  return <PaymentComplete/>
}
 

  
};

export default Cart;
