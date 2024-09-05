import React from "react";
import { MdOutlineDeliveryDining, MdStars } from "react-icons/md";
import FoodItemAccordion from "../components/FoodItemAccordion";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../components/RestaurantMenuShimmer";
import {useRestaurantMenu} from "../hooks/useRestaurantMenu.js"
const RestaurantMenu = () => {

  const {resId}=useParams()
  const {restaurantInfo,accordionInfo}=useRestaurantMenu(resId)
  const {name,totalRatingsString,costForTwoMessage,city,feeDetails,cuisines}=restaurantInfo
 
  console.log(restaurantInfo)

  

  return restaurantInfo.length===0 ?<RestaurantMenuShimmer/> :(
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
                {feeDetails?.message}
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
                  <FoodItemAccordion menuCategoryTitle={menuInfo?.title || ""} menuData={menuInfo } />
                 </div>
                 
              })
            }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;