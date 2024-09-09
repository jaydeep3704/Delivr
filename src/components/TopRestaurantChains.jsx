import React from "react";
import Slider from "./Slider";
import { CLOUDINARY_RESTAURANT_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const TopRestaurantChains = ({ restaurantData = [], title }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <h1 className="flex flex-col justify-between mb-5 text-xl font-semibold md:flex-row md:text-2xl">
        <span className="mb-3">{title}</span>
        <Slider className="top-res-chain" amount={700} />
      </h1>
      <div className="flex justify-between flex-shrink-0 mb-5 overflow-x-auto top-res-chain container-snap no-scrollbar no-scrollbar::-webkit-scrollbar flex-nowrap">
        {restaurantData.map((restaurant) => {
          const restInfo = restaurant.info;
          const {
            id,
            name,
            cloudinaryImageId,
            cuisines,
            sla,
            costForTwo,
            areaName,
            aggregatedDiscountInfoV3,
            avgRating,
          } = restInfo;
          const discountHeading = aggregatedDiscountInfoV3?.header || "";
          const discountSubHeading = aggregatedDiscountInfoV3?.subHeader || "";
          const text = cuisines.join(",");
          return (
            <div className="flex-shrink-0" key={id}>
              <div
                className="  w-[250px] h-[250px]      md:w-[325px] md:h-[325px] rounded-3xl p-3 hover:scale-95 transition duration-300 cursor-pointer  "
                onClick={() => navigate(`/restaurants/${id}`)}
              >
                <div className="w-full md:h-[200px] h-[150px] mb-2 relative overflow-hidden">
                  <img
                    src={`${CLOUDINARY_RESTAURANT_URL}/${cloudinaryImageId}`}
                    alt=""
                    className="object-cover w-full rounded-2xl md:h-[200px] h-[150px]"
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
                      {name.length > 15 ? name.substring(0, 15) + "..." : name}
                    </span>
                    <span className="flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white bg-green-700 rounded-lg md:text-sm">
                      {avgRating} <FaStar className="text-[12px]" />
                    </span>
                  </p>
                  <p className="flex justify-between text-sm font-light text-gray-600">
                    <span>
                      {text?.length > 21 ? text.substring(0, 21) + "..." : text}
                    </span>
                    <span>{costForTwo}</span>
                  </p>
                  <p className="flex justify-between text-xs font-semibold text-right md:text-sm">
                    <span>{areaName}</span>
                    <span>{sla.deliveryTime} min</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
