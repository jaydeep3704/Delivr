import React from 'react'
import { FaStar } from 'react-icons/fa'

const RestaurantCard = () => {

    const text="Indian,Chinese,Japanese"
  return (
    <div className='w-[350px] h-[350px] rounded-3xl p-3 hover:shadow-md'>
       <div className='w-full h-[250px]'>
          <img src="https://b.zmtcdn.com/data/pictures/6/20204896/d26fd40a53ce982cdbb076febd96a380_o2_featured_v2.jpg?output-format=webp" alt="" className='object-cover w-full rounded-2xl'/>
       </div>
       <div>
            <p className='flex justify-between'>
                <span className='text-xl font-semibold'>Mc Donalds</span>
                 <span className='flex items-center gap-2 px-2 py-1 text-sm font-semibold text-white bg-green-700 rounded-lg'>3.9 <FaStar className='text-[12px]'/></span>
            </p>
            <p className='flex justify-between font-light text-gray-600'>
                <span >{text?.length>21 ? text.substring(0,21)+"..." : text}</span>
                <span>₹100 for one</span>
            </p>
            <p className='text-sm font-semibold text-right'>
                30 min
            </p>
       </div>
    </div>
  )
}

export default RestaurantCard
