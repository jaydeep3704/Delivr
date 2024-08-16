import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterListAlt } from "react-icons/md";
import { SWIGGY_API } from "../constants";
import ShimmerRestaurantContainer from "./ShimmerRestaurantContainer";

const RestaurantContainer = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [heading, setHeading] = useState("Top Restaurants Near Me");
  const [selectedOption, setSelectedOption] = useState('');
  const [showSortBy, setShowSortBy] = useState(false);
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = async () => {
    const lat = 18.516726
    const long = 73.856255

    try {
      const response = await fetch(SWIGGY_API(lat, long));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      const card = await json?.data?.cards[1]?.card?.card;
      const food_delivery_res = await json?.data?.cards[2]?.card?.card.title;
        console.log(json.data)
      const restaurants = card.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setDefaultList(restaurants);
      setHeading(food_delivery_res);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  useEffect(() => {
    fetchData();
  }, []);

  return listofRestaurants.length === 0 ? (
    <ShimmerRestaurantContainer />
  ) : (
    <div className="px-40 mx-auto my-10">
      <h1 className="text-3xl font-semibold capitalize">{heading}</h1>

      <div className="flex gap-5 mt-5 text-gray-600">
        <button className="flex items-center gap-2 px-5 py-2 border-none shadow-md outline-none rounded-3xl">
          Filter
          <MdFilterListAlt className="text-lg" />
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 border-none shadow-md outline-none rounded-3xl"
          onClick={() => setShowSortBy((prev) => !prev)}
        >
          Sort By <IoIosArrowDown />
        </button>
        
        {showSortBy && (
          <div className="absolute flex flex-col p-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-md left-60 z-20">
            <label className="flex items-center">
              <input
                type="radio"
                value="default"
                checked={selectedOption === 'default'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2">Relevance (Default)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="delivery-time"
                checked={selectedOption === 'delivery-time'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2">Delivery Time</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="rating"
                checked={selectedOption === 'rating'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2">Rating</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cost-high-to-low"
                checked={selectedOption === 'cost-high-to-low'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2">Cost High to Low</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cost-low-to-high"
                checked={selectedOption === 'cost-low-to-high'}
                onChange={handleChange}
                className="text-blue-500 form-radio"
              />
              <span className="ml-2">Cost Low to High</span>
            </label>
            <button
              className="pt-2 font-semibold text-orange-600 capitalize border-t border-gray-200"
              onClick={handleSort}
            >
              Apply
            </button>
          </div>
        )}

        <button
          className="flex items-center gap-2 px-5 py-2 border-none shadow-md outline-none rounded-3xl"
          onClick={handleFastDelivery}
        >
          Fast Delivery
        </button>
        <button
          className="flex items-center gap-2 px-5 py-2 border-none shadow-md outline-none rounded-3xl"
          onClick={handleRatingFilter}
        >
          Rating 4+
        </button>
      </div>

      {/* Restaurant card container */}
      <div className="flex flex-wrap gap-12 mt-5">
        {listofRestaurants.map((restaurant) => {
          const restInfo = restaurant.info;
          return (
            <RestaurantCard
              key={restInfo.id}
              restName={restInfo.name}
              imageId={restInfo.cloudinaryImageId}
              cuisines={restInfo.cuisines}
              rating={restInfo.avgRating}
              deliveryTime={restInfo.sla.deliveryTime}
              costForTwo={restInfo.costForTwo}
              locality={restInfo.areaName}
              discountHeading={restInfo.aggregatedDiscountInfoV3?.header}
              discountSubHeading={restInfo.aggregatedDiscountInfoV3?.subHeader}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
