import { useState,useEffect } from "react";
import { SWIGGY_API } from "../constants";
export const useRestaurantData= ()=>{
    const [listofRestaurants, setListOfRestaurants] = useState([]);
    const [defaultList, setDefaultList] = useState([]);
    const [heading, setHeading] = useState("Top Restaurants Near Me");
     const[restaurantChainTitle,setRestaurantChainTitle]=useState("")
  

    const fetchData = async () => {
      const lat = 18.516726
      const long = 73.856255
  
      
        const response = await fetch(SWIGGY_API(lat, long));
        
        const json = await response.json();
        const card = await json?.data?.cards[1]?.card?.card;
        const food_delivery_res = await json?.data?.cards[2]?.card?.card?.title;
        const restaurant_chains = await json?.data?.cards[1]?.card?.card?.header?.title || "Top Restaurant Chains Near You";
        const restaurants = card.gridElements?.infoWithStyle?.restaurants || [];
      
        setRestaurantChainTitle(restaurant_chains)
        setListOfRestaurants(restaurants);
        setDefaultList(restaurants);
        setHeading(food_delivery_res);
        
      
     
    };

    useEffect(() => {
        fetchData();
      }, []);

    

     return {listofRestaurants,defaultList,heading,restaurantChainTitle} 

}