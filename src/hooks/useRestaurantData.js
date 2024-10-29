import { useState,useEffect } from "react";
import { SWIGGY_API } from "../constants";
export const useRestaurantData= (lat,lng)=>{
    const [listofRestaurants, setListOfRestaurants] = useState([]);
    const [defaultList, setDefaultList] = useState([]);
    const [heading, setHeading] = useState("Top Restaurants Near Me");
    const[restaurantChainTitle,setRestaurantChainTitle]=useState("")
    const[bestPlacesToEat,setBestPlacesToEat]=useState([])

    
    
    const fetchData = async () => {
     
  
      
      try {
          const response = await fetch(SWIGGY_API(lat, lng));
          
          const json = await response.json();
          const card = await json?.data?.cards[1]?.card?.card;
          const food_delivery_res = await json?.data?.cards[2]?.card?.card?.title;
          const restaurant_chains = await json?.data?.cards[1]?.card?.card?.header?.title || "Top Restaurant Chains Near You";
          const restaurants = card?.gridElements?.infoWithStyle?.restaurants || [];
        
          setBestPlacesToEat(json?.data?.cards[6]?.card?.card?.brands || [])
          setRestaurantChainTitle(restaurant_chains)
          setListOfRestaurants(restaurants);
          setDefaultList(restaurants);
          setHeading(food_delivery_res);
          
      } catch (error) {
        console.log(error)
      }
      
     
    };

    useEffect(() => {
        fetchData();
      }, [lat,lng]);

    

     return {listofRestaurants,defaultList,heading,restaurantChainTitle,setListOfRestaurants,bestPlacesToEat} 

}