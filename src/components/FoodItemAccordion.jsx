import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { CLOUDINARY_RESTAURANT_FOOD_URL, CLOUDINARY_RESTAURANT_URL } from '../constants.js'
const FoodItemAccordion = ({menuCategoryTitle,menuData}) => {

  const [isActive, setIsActive] = useState(true);
  
  const[itemCards,setItemCards]=useState(menuData?.itemCards || menuData?.categories[0]?.itemCards || [])

  // Function to toggle the state
  const toggleActive = () => setIsActive(prev => !prev);

  return (
    <div>
      <div className='flex justify-between py-5 text-2xl font-bold border-b border-gray-400'>
        {menuCategoryTitle}
        {isActive?<FaChevronDown onClick={toggleActive} />:<FaChevronUp onClick={toggleActive}/>}
      </div>
      <AnimatePresence>

      {isActive && (

        
        <motion.div initial={{opacity:0,top:-800}} exit={{opacity:0}} transition={{ease:'easeInOut',duration:0.2}} animate={{opacity:1,top:0}}>
          {
            itemCards.map((card)=>{
              let menuCardInfo=card.card.info
             
              const {id,imageId,name,price}=menuCardInfo
              return(
                <div className="flex justify-between py-10 border-b border-gray-300" key={id}>
                <div className="text-lg font-semibold">
                  <p>{name}</p>
                  <p>₹ {price/100}</p>
                </div>
                <div className="relative w-40 h-40 rounded-2xl">
                 {imageId && <img
                    src={`${CLOUDINARY_RESTAURANT_FOOD_URL}/${imageId}`}
                    alt={name}
                    className="object-cover w-full h-full rounded-2xl"
                    />}
                  <button className={`font-bold uppercase absolute bottom-[-20px] left-1/2 px-10 py-2 text-green-600 bg-white shadow-md outline-none rounded-xl translate-x-[-50%] ${!imageId && 'bottom-20'}`}>
                    Add
                  </button>
                </div>
              </div>
              )
            })
          }
          
          
        
        </motion.div>
      )
      
    }
    </AnimatePresence>
    </div>
  );
};

export default FoodItemAccordion;
