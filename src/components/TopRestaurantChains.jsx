import React from 'react'
import Slider from './Slider'
import RestaurantCard from './RestaurantCard'
const TopRestaurantChains = ({restaurantData=[],title}) => {

  return (
    <div className=''>
       <h1 className='flex flex-col justify-between mb-5 text-xl font-semibold md:flex-row md:text-2xl'><span className='mb-3'>{title}</span><Slider className='top-res-chain' amount={700}/></h1>
       <div className='flex justify-between flex-shrink-0 mb-5 overflow-x-auto top-res-chain container-snap no-scrollbar no-scrollbar::-webkit-scrollbar flex-nowrap'>
       {restaurantData.map((restaurant) => {
          
          return (
            
            <div className='flex-shrink-0'>
       <RestaurantCard
        key={restaurant.info.id}
        restName={restaurant.info.name}
        imageId={restaurant.info.cloudinaryImageId}
        cuisines={restaurant.info.cuisines}
        rating={restaurant.info.avgRating}
        deliveryTime={restaurant.info.sla.deliveryTime}
        costForTwo={restaurant.info.costForTwo}
        locality={restaurant.info.areaName}
        discountHeading={restaurant.info.aggregatedDiscountInfoV3?.header}
        discountSubHeading={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
      />
       </div>
          );
        })}
       </div>
       
    </div>
  )
}

export default TopRestaurantChains
