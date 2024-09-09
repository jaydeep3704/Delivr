import React, { useEffect } from "react";
import { MdOutlineDeliveryDining, MdStars } from "react-icons/md";
import FoodItemAccordion from "../components/FoodItemAccordion";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../components/RestaurantMenuShimmer";
import {useRestaurantMenu} from "../hooks/useRestaurantMenu.js"
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { showAlert,clearCart } from "../utils/cartSlice.js";
const RestaurantMenu = () => {

  const {resId}=useParams()
  const {restaurantInfo,accordionInfo}=useRestaurantMenu(resId)
  const {name,totalRatingsString,costForTwoMessage,city,feeDetails,cuisines}=restaurantInfo
  const alert=useSelector((store)=>store.cart.alert)
  const dispatch=useDispatch()
  return restaurantInfo.length===0 ?<RestaurantMenuShimmer/> :(
   <> 
    <div className="flex justify-center w-full px-3 py-10">
      <div className="w-full lg:w-1/2">
        <div className="p-5 rounded-3xl bg-gradient-to-b from-white to-gray-200">
          <h1 className="text-3xl font-bold text-slate-900">
            {name}
          </h1>
          <div className="flex flex-col gap-2 p-5 mt-5 bg-white border border-gray-200 rounded-2xl">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <MdStars className="text-2xl text-green-700" />
              <span>({totalRatingsString})</span>
              <span>{costForTwoMessage}</span>
            </p>
            <span className="font-bold text-orange-600 capitalize text-md">
              {cuisines?.join(", ")}
            </span>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center p-0 m-0">
                <span className="inline-block p-1 bg-gray-400 rounded-full"></span>
                <span className="h-6 w-[2px] bg-gray-400"></span>
                <span className="inline-block p-1 bg-gray-400 rounded-full"></span>
              </div>
              <div className="font-semibold text-md">
                <p>
                  Outlet <span>{city}</span>
                </p>
                <p>60-65 min</p>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <span className="flex items-center gap-5 text-gray-600">
                <MdOutlineDeliveryDining className="text-2xl text-gray-600" />
                {feeDetails?.message || "Order above 149 for discounted delivery fee"}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 ">
            {
              accordionInfo.map((menuCat,index)=>{
                let menuInfo=menuCat.card.card
                 return menuInfo.title  && 
                 <div className="w-full" key={index}>
                  <div className="w-full h-4 bg-gray-200"></div>
                  <FoodItemAccordion menuCategoryTitle={menuInfo?.title || ""} menuData={menuInfo } resId={resId}/>
                 </div>
                 
              })
            }
        </div>
      </div>
    </div>
    
    <AnimatePresence>
       {alert && <motion.div className="w-[500px] shadow-xl bg-white   fixed bottom-10 left-1/2 translate-x-[-50%] p-10" initial={{left:-500}} animate={{left:"50%"}} exit={{left:-500}}>
          <div className="text-lg font-semibold">Items Already In Cart</div>
          <div className="text-sm text-gray-600">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</div>
          <div className="flex gap-3 mt-5">
            <button className="w-1/2 py-2 text-center text-[#60B246] border-2 border-[#60B246] font-semibold" onClick={()=>dispatch(showAlert(false))}>NO</button>
            <button className="w-1/2 py-2 text-center text-white  bg-[#60B246] font-semibold" onClick={()=>{
              dispatch(clearCart())
              dispatch(showAlert(false))
            }}>YES , START AFRESH</button>
          </div>
    </motion.div>}
    </AnimatePresence>
    
    </>
  );
};

export default RestaurantMenu;