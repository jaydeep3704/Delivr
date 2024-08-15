
import useGeolocation from "./useGeoLocation"
import { SWIGGY_API } from "../constants"
import axios from "axios"
import { useState } from "react"
const useRestaurantData=async()=>{

    const {position}=await useGeolocation()
    const{latitude,longitude}=position
    const API=  SWIGGY_API(latitude,longitude)
    
    const data = await fetch(API);
    const json = await data.json();
 

    
        const[restaurantData,setRestaurantData]=useState([])
        await setRestaurantData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        return {restaurantData}
  
}

export default useRestaurantData