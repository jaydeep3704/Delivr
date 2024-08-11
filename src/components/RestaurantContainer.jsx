import React from 'react'
import RestaurantCard from './RestaurantCard'
const RestaurantContainer = () => {
  return (
    <div className='px-40 mx-auto my-10 '>
        <h1 className='text-3xl font-semibold'>Food Delivery Restaurants Near Me</h1>
        <div className='flex flex-wrap justify-between mt-5'> 
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        
        </div>
       
    </div>
  )
}

export default RestaurantContainer
