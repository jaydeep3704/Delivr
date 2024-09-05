import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CLOUDINARY_RESTAURANT_FOOD_URL } from "../constants.js";
import nonveg from "../assets/nonveg.png";
import veg from "../assets/veg.png";

const NestedAccordion = ({ nestedCategoryData }) => {
  
  const [isActive,setIsActive ] = useState(false);
  const[itemCards,setItemCards]=useState(nestedCategoryData.itemCards)

 const toggleActive=()=>{
  setIsActive(prev=>!prev)
 }
  const {title}=nestedCategoryData

  
  return (
    <div className="w-full border-b border-gray-300 last:border-none">
     
        
        <div  >
            <div className="flex justify-between py-4 pr-16 text-lg font-semibold cursor-pointer" onClick={toggleActive}>
              {title}
              {isActive ? (
                <FaChevronDown  />
              ) : (
                <FaChevronUp  />
              )}
            </div>
        </div>
        <AnimatePresence>
        {isActive && 
        (
          <motion.div
            initial={{ opacity: 0, top: -800 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            animate={{ opacity: 1, top: 0 }}
          >
            {itemCards.map((card) => {
              let menuCardInfo = card.card.info;

              const { id, imageId, name, price, ratings ,description,defaultPrice,totalPrice} = menuCardInfo;
              const { vegClassifier } = menuCardInfo.itemAttribute;

              const renderIcon = () => {
                switch (vegClassifier) {
                  case "VEG":
                    return <img src={veg} className="w-4 h-4" />;
                  case "NONVEG":
                    return <img src={nonveg} className="w-4 h-4" />;
                  case "EGG":
                    return <img src={nonveg} className="w-4 h-4" />;
                  default:
                    return ""; // Optionally return a default icon or null
                }
              };
              return  (
                <div
                  className="flex justify-between py-10 pr-10 border-b border-gray-300 last:border-none"
                  key={id}
                >
                  <div className="text-lg font-semibold">
                    <p className="items-center gap-3 text-md">
                      {renderIcon()}
                      {name}
                    </p>
                    <p className="text-[15px]">₹ {price / 100 || totalPrice/100 || defaultPrice/100}</p>
                    {ratings.aggregatedRating.rating && (
                      <p className="flex items-center gap-2 text-sm text-green-700">
                        <FaStar className="text-sm text-green-700" />
                        {ratings.aggregatedRating.rating}{" "}
                        <span className="text-gray-700">
                          ({ratings.aggregatedRating.ratingCount})
                        </span>{" "}
                      </p>
                    )}
                    <div className="mt-2 text-base font-light text-gray-400 font-poppins ">{description}</div>
                  </div>
                  <div className="relative flex-shrink-0 w-40 h-40 rounded-2xl">
                    {imageId && (
                      <img
                        src={`${CLOUDINARY_RESTAURANT_FOOD_URL}/${imageId}`}
                        alt={name}
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    )}
                    <button
                      className={`font-bold uppercase absolute bottom-[-20px] left-1/2 px-10 py-2
                         text-green-600 bg-white shadow-md outline-none rounded-xl translate-x-[-50%] 
                         ${!imageId && 'bottom-28'}`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
       
            
    </div>
  );
};

export default NestedAccordion;