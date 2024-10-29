import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CLOUDINARY_RESTAURANT_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({
  restName,
  imageId,
  cuisines,
  rating,
  deliveryTime,
  costForTwo,
  locality,
  discountHeading = "",
  discountSubHeading = "",
  id,
}) => {
  const navigate = useNavigate();
  const text = cuisines.join(",");
  const ratingColor=rating>=4 ? "bg-green-700": rating >3 ? "bg-orange-400":'bg-red-400'
  
  return (
    <div
      className="w-full  h-[330px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-3xl p-3 hover:scale-95 duration-200 cursor-pointer "
      onClick={() => {
        navigate(`/restaurants/${id}`)
    }}
    >
      <div className="w-full md:h-[200px] sm:h-[150px] h-[250px] mb-2 relative overflow-hidden">
        <img
          src={`${CLOUDINARY_RESTAURANT_URL}/${imageId}`}
          alt=""
          className="object-cover w-full rounded-2xl md:h-[200px] sm:h-[150px] h-[250px]"
        />
        <div
          className="absolute bottom-0 flex w-full p-2 text-lg font-extrabold text-white uppercase md:text-2xl rounded-b-2xl font-roboto "
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
          }}
        >
          {discountHeading ? discountHeading : ""}{" "}
          {discountSubHeading ? discountSubHeading : ""}
        </div>
      </div>
      <div>
        <p className="flex justify-between">
          <span className="font-semibold text-md md:text-xl">
            {restName.length > 15
              ? restName.substring(0, 15) + "..."
              : restName}
          </span>
          <span className={`flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white ${ratingColor} rounded-lg md:text-sm`}>
            {rating} <FaStar className="text-[12px]" />
          </span>
        </p>
        <p className="flex justify-between text-sm font-light text-gray-600">
          <span>
            {text?.length > 21 ? text.substring(0, 21) + "..." : text}
          </span>
          <span>{costForTwo}</span>
        </p>
        <p className="flex justify-between text-xs font-semibold text-right md:text-sm">
          <span>{locality}</span>
          <span>{deliveryTime} min</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
