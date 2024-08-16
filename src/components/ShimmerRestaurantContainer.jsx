import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerRestaurantContainer = () => {
  return (
    <div className="w-full px-40 mx-auto my-10 ">
      <div className='w-[350px] h-2 mb-5 rounded-md bg-slate-50'></div>
     
       <div className="flex flex-wrap justify-between gap-5 mt-5"> 
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
