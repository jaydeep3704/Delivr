import React from "react";
import WOYM from "../components/WOYM";
import RestaurantContainer from "../components/RestaurantContainer";

const Home = () => {
  
  return (
    <div className="w-full">
      <WOYM/>
       
      <RestaurantContainer/>
    </div>
  );
};

export default Home;
