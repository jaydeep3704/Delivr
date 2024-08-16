import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { CLOUDINARY_RESTAURANT_URL } from '../constants'

const RestaurantCard = ({restName,imageId,cuisines,rating,deliveryTime,costForTwo,locality,discountHeading="",discountSubHeading=""}) => {
    
   const text=cuisines.join(",")
  return (
    <div className='w-[350px] h-[350px] rounded-3xl p-3 hover:shadow-md cursor-pointer  '>
       <div className='w-full h-[225px] mb-2 relative overflow-hidden'>
          <img src={`${CLOUDINARY_RESTAURANT_URL}/${imageId}`} alt="" className='object-cover w-full rounded-2xl h-[225px]'/>
          <div className='absolute bottom-0 w-full p-2 text-white uppercase font-extrabold text-2xl flex  rounded-b-2xl font-roboto '  style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)' }}>{discountHeading ? discountHeading :""} {discountSubHeading?discountSubHeading:""}</div>
       </div>
       <div >
            <p className='flex justify-between'>
                <span className='text-xl font-semibold'>{restName.length>20?restName.substring(0,20)+"...":restName}</span>
                 <span className='flex items-center gap-2 px-2 py-1 text-sm font-semibold text-white bg-green-700 rounded-lg'>{rating} <FaStar className='text-[12px]'/></span>
            </p>
            <p className='flex justify-between font-light text-gray-600'>
                <span >{text?.length>21 ? text.substring(0,21)+"..." : text}</span>
                <span>{costForTwo}</span>
            </p>
            <p className='flex justify-between text-sm font-semibold text-right'>
              <span>{locality}</span>
              <span>{deliveryTime} min</span>
                
            </p>
          
       </div>
      
    </div>
  )
}

export default RestaurantCard
