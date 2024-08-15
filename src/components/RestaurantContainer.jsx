import React from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../hooks/useRestaurantData";
import { mockData } from "../constants";

const RestaurantContainer = () => {
  const restaurantData = mockData.restaurants;
  console.log(restaurantData);
  // const{restaurantData}=useRestaurantData()

  // console.log(restaurantData)

  return (
    <div className="px-40 mx-auto my-10 ">
      <h1 className="text-3xl font-semibold">
        Food Delivery Restaurants Near Me
      </h1>
      <div className="flex flex-wrap mt-5">
        {restaurantData.map((restaurant) => {
          const restInfo = restaurant.info;
          return (
            <RestaurantCard
              key={restInfo.id}
              restName={restInfo.name}
              imageId={restInfo.cloudinaryImageId}
              cuisines={restInfo.cuisines}
              rating={restInfo.externalRatings.aggregatedRating.rating}
              deliveryTime={restInfo.sla.deliveryTime}
              costForTwo={restInfo.costForTwo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
