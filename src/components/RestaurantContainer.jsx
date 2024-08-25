import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterListAlt } from "react-icons/md";
import { SWIGGY_API } from "../constants";
import ShimmerRestaurantContainer from "./ShimmerRestaurantContainer";
import TopRestaurantChains from "./TopRestaurantChains";

const RestaurantContainer = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [heading, setHeading] = useState("Top Restaurants Near Me");
  const [selectedOption, setSelectedOption] = useState('');
  const [showSortBy, setShowSortBy] = useState(false);
  const[restaurantChainTitle,setRestaurantChainTitle]=useState("")
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
      const food_delivery_res = await json?.data?.cards[2]?.card?.card?.title;
      const restaurant_chains = await json?.data?.cards[1]?.card?.card?.header?.title || "Top Restaurant Chains Near You";

        console.log(json.data)
      const restaurants = card.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantChainTitle(restaurant_chains)
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
    <div className="px-5 mx-auto my-10 lg:px-60 sm:px-20">
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
      <div className={`flex flex-wrap  flex-row  mt-5 lg:gap-10 gap-0 ${listofRestaurants.length%2==0 && 'sm:justify-between' } `}>
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
