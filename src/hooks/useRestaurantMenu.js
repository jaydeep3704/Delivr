import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../constants";

export const useRestaurantMenu = (resId) => {
    

    const [restaurantInfo,setRestaurantInfo]=useState([])
    const [accordionInfo,setAccordionInfo]=useState([])
    const fetchRestaurantInfo = async () => {
        const lat = 19.076090
        const long = 72.877426
        
        try {
            const response = await fetch(RESTAURANT_MENU(lat, long, resId));
            const json = await response.json();
            setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info || []);
            
            const menuCategory = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR;
            if (menuCategory) {
                let menuList = Object.entries(menuCategory);
                menuList = menuList[0][1].slice(1);
                setAccordionInfo(menuList);
            }
        } catch (error) {
            console.error("Failed to fetch restaurant info:", error);
        }
    };
  
    useEffect(() => {
        fetchRestaurantInfo();
    }, []); // Add resId as a dependency if it changes over time

    return {restaurantInfo,accordionInfo}
};

