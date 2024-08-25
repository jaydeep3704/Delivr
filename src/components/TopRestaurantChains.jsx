import React from 'react'
import Slider from './Slider'
import RestaurantCard from './RestaurantCard'
const TopRestaurantChains = ({restaurantData=[],title}) => {

  return (
    <div className=''>
       <h1 className='flex flex-col justify-between mb-5 text-xl font-semibold md:flex-row md:text-2xl'><span className='mb-3'>{title}</span><Slider className='top-res-chain' amount={700}/></h1>
       <div className='flex justify-between flex-shrink-0 mb-5 overflow-x-auto top-res-chain container-snap no-scrollbar no-scrollbar::-webkit-scrollbar flex-nowrap'>
       {restaurantData.map((restaurant) => {
             const restInfo = restaurant.info;
             const{id,name,cloudinaryImageId,cuisines,sla,costForTwo,areaName,aggregatedDiscountInfoV3,avgRating}=restInfo
          return (
            
        <div className='flex-shrink-0'>
       <RestaurantCard
        key={id}
        id={id}
        restName={name}
        imageId={cloudinaryImageId}
        cuisines={cuisines}
        rating={avgRating}
        deliveryTime={sla.deliveryTime}
        costForTwo={costForTwo}
        locality={areaName}
        discountHeading={aggregatedDiscountInfoV3?.header}
        discountSubHeading={aggregatedDiscountInfoV3?.subHeader}
      />
       </div>
          );
        })}
       </div>
       
    </div>
  )
}

export default TopRestaurantChains
