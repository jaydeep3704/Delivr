import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerRestaurantContainer = () => {
  return (
    <div className="w-full px-10 mx-auto my-10 sm:px-20 md:px-60">
      
     
       <div className="flex flex-col flex-wrap items-center justify-between gap-5 mt-5 md:flex-row sm:flex-row"> 
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
       </div>
    </div>
  )
}

export default ShimmerRestaurantContainer
