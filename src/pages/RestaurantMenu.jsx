import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../constants";

import { MdOutlineDeliveryDining, MdStars } from "react-icons/md";
import FoodItemAccordion from "../components/FoodItemAccordion";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [accordionInfo,setAccordionInfo]=useState([])
  const fetchRestaurantInfo = async () => {
    
    const lat = 18.516726
    const long = 73.856255
    
  
    const data = await fetch(RESTAURANT_MENU(lat,long));
    const json = await data.json();
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    const menuCategory=json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
    
    let menuList=Object.entries(menuCategory)
    menuList=menuList[0][1].slice(1)
    
    setAccordionInfo(menuList)
  };
console.log(accordionInfo)

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const {name,totalRatingsString,costForTwoMessage,city,feeDetails,cuisines}=restaurantInfo
 
  console.log(accordionInfo)
  return (
    <div className="flex justify-center w-full px-3 py-10">
      <div className="w-full lg:w-1/2">
        <div className="p-5 rounded-3xl bg-gradient-to-b from-white to-gray-200">
          <h1 className="text-3xl font-bold text-slate-900">
            {name}
          </h1>
          <div className="flex flex-col gap-3 p-5 mt-5 bg-white border border-gray-200 rounded-2xl">
            <p className="flex items-center gap-5 text-lg font-semibold">
              <MdStars className="text-2xl text-green-700" />
              <span>-- ({totalRatingsString})</span>
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
                 return menuInfo.title  && <FoodItemAccordion menuCategoryTitle={menuInfo?.title || ""} menuData={menuInfo } key={index}/>
              })
            }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
