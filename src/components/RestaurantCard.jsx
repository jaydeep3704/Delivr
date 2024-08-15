import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { CLOUDINARY_RESTAURANT_URL } from '../constants'

const RestaurantCard = ({restName,imageId,cuisines,rating,deliveryTime,costForTwo}) => {
    
   const text=cuisines.join(",")
  return (
    <div className='w-[350px] h-[350px] rounded-3xl p-3 hover:shadow-md cursor-pointer  '>
       <div className='w-full h-[225px] mb-2'>
          <img src={`${CLOUDINARY_RESTAURANT_URL}/${imageId}`} alt="" className='object-cover w-full rounded-2xl h-[225px]'/>
       </div>
       <div>
            <p className='flex justify-between'>
                <span className='text-xl font-semibold'>{restName.length>20?restName.substring(0,20)+"...":restName}</span>
                 <span className='flex items-center gap-2 px-2 py-1 text-sm font-semibold text-white bg-green-700 rounded-lg'>3.9 <FaStar className='text-[12px]'/></span>
            </p>
            <p className='flex justify-between font-light text-gray-600'>
                <span >{text?.length>21 ? text.substring(0,21)+"..." : text}</span>
                <span>{costForTwo}</span>
            </p>
            <p className='text-sm font-semibold text-right'>
                {deliveryTime} min
            </p>
       </div>
    </div>
  )
}

export default RestaurantCard
