import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterListAlt } from "react-icons/md";
import ShimmerRestaurantContainer from "./ShimmerRestaurantContainer";
import TopRestaurantChains from "./TopRestaurantChains";
import { useRestaurantData } from "../hooks/useRestaurantData.js";
import { useOnlineStatus } from "../hooks/useOnlineStatus.js";
import { useSelector } from "react-redux";
import Offline from "../assets/offline.jpg"
const RestaurantContainer = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [showSortBy, setShowSortBy] = useState(false);
  const locationInfo=useSelector((store)=>store.location.currentLocation)
 
  const {lat,lng}=locationInfo
  const {listofRestaurants,defaultList,heading,restaurantChainTitle,setListOfRestaurants}=useRestaurantData(lat,lng)

  
const onlineStatus=useOnlineStatus()
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleSort = (e) => {
    e.preventDefault();
    let sortedRestaurants = [...listofRestaurants]; // Create a new array

    switch (selectedOption) {
      case "default":
        sortedRestaurants = [...defaultList]; // Reset to default list
        break;
      case "delivery-time":
        sortedRestaurants.sort((restaurant1, restaurant2) =>
          restaurant1.info.sla.deliveryTime - restaurant2.info.sla.deliveryTime
        );
        break;
      case "rating":
        sortedRestaurants.sort((restaurant1, restaurant2) =>
          restaurant2.info.avgRating - restaurant1.info.avgRating
        );
        break;
      case "cost-low-to-high":
        sortedRestaurants.sort((restaurant1, restaurant2) => {
          const costForTwo1 = parseInt(restaurant1.info.costForTwo.replace(/[^0-9]/g, ''));
          const costForTwo2 = parseInt(restaurant2.info.costForTwo.replace(/[^0-9]/g, ''));
          return costForTwo1 - costForTwo2;
        });
        break;
      case "cost-high-to-low":
        sortedRestaurants.sort((restaurant1, restaurant2) => {
          const costForTwo1 = parseInt(restaurant1.info.costForTwo.replace(/[^0-9]/g, ''));
          const costForTwo2 = parseInt(restaurant2.info.costForTwo.replace(/[^0-9]/g, ''));
          return costForTwo2 - costForTwo1;
        });
        break;
      default:
        break;
    }

    setListOfRestaurants(sortedRestaurants);
    setShowSortBy(false);
  };

  const handleFastDelivery = (e) => {
    e.preventDefault();
    const sortedRestaurants = [...listofRestaurants].sort((restaurant1, restaurant2) =>
      restaurant1.info.sla.deliveryTime - restaurant2.info.sla.deliveryTime
    );
    setListOfRestaurants(sortedRestaurants);
  };

  const handleRatingFilter = (e) => {
    e.preventDefault();
    const filteredRestaurants = defaultList.filter((restaurant) =>
      restaurant.info.avgRating >= 4
    );
    setListOfRestaurants(filteredRestaurants);
  };




  if(!onlineStatus){
    return(
      <div className="flex justify-center w-full mt-10 ">
        <div className="w-full p-10 mx-5 text-center shadow-lg rounded-xl md:w-1/4 sm:1/2 text-wrap">
           <h3 className="text-2xl font-bold">You are Offline</h3>
           <div className="text-xl text-gray-600">We are Unable To Reach Delivr . Please Check Your Network Settings and Try Again</div>
           <div>
              <img src={Offline} alt="" />
           </div>
        </div>
      </div>
    )
  }
 

  return listofRestaurants.length===0 ? (
    <ShimmerRestaurantContainer />
  ) : (
    <div className="px-5 mx-auto my-10 sm:px-20 lg:px-48 ">
      <TopRestaurantChains restaurantData={defaultList} title={restaurantChainTitle} />


      <h1 className="text-lg md:text-2xl font-semibold capitalize  border-t-[1px] border-gray-300 pt-5">{heading}</h1>

      <div className="flex flex-wrap gap-5 mt-5 text-gray-600">
        <button className="flex items-center gap-2 px-5 py-2 text-sm border-none shadow-md outline-none rounded-3xl md:text-md">
          Filter
          <MdFilterListAlt className="text-lg" />
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 text-sm border-none shadow-md outline-none rounded-3xl md:text-md"
          onClick={() => setShowSortBy((prev) => !prev)}
        >
          Sort By <IoIosArrowDown />
        </button>
        
        {showSortBy && (
          <div className="absolute z-20 flex flex-col p-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-md left-60 ">
            <label className="flex items-center">
              <input
                type="radio"
                value="default"
                checked={selectedOption === 'default'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2 text-sm md:text-md">Relevance (Default)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="delivery-time"
                checked={selectedOption === 'delivery-time'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2 text-sm md:text-md">Delivery Time</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="rating"
                checked={selectedOption === 'rating'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2 text-sm md:text-md">Rating</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cost-high-to-low"
                checked={selectedOption === 'cost-high-to-low'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2 text-sm md:text-md">Cost High to Low</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cost-low-to-high"
                checked={selectedOption === 'cost-low-to-high'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2 text-sm md:text-md">Cost Low to High</span>
            </label>
            <button
              className="pt-2 text-sm font-semibold text-orange-600 capitalize border-t border-gray-200 md:text-md"
              onClick={handleSort}
            >
              Apply
            </button>
          </div>
        )}

        <button
          className="flex items-center gap-2 px-5 py-2 text-sm border-none shadow-md outline-none rounded-3xl md:text-md"
          onClick={handleFastDelivery}
        >
          Fast Delivery
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 text-sm border-none shadow-md outline-none rounded-3xl md:text-md"
          onClick={handleRatingFilter}
        >
          Rating 4+
        </button>
      </div>

      {/* Restaurant card container */}
      <div className={`w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8`}>
        {listofRestaurants.map((restaurant) => {
          const restInfo = restaurant.info;
          const{id,name,cloudinaryImageId,cuisines,sla,costForTwo,areaName,aggregatedDiscountInfoV3,avgRating}=restInfo
          return (
            <RestaurantCard
              key={id}
              id={id}
              restName={name}
              imageId={cloudinaryImageId}
              cuisines={cuisines}
              rating={avgRating}
              deliveryTime={sla.deliveryTime}
              costForTwo={costForTwo}
              locality={areaName}
              discountHeading={aggregatedDiscountInfoV3?.header}
              discountSubHeading={aggregatedDiscountInfoV3?.subHeader}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
