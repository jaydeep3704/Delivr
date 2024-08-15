import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Home from "./pages/Home";

/*
--- App Structure ---
*Header
  --Logo
  --NavItems
    
*Body
 -Search
 -RestaurantContainer
   --RestaurantCard

*Footer
  -Copyright
  -Links

*/

const App=()=>{


 
  
    return (
        <div className="">
            <Navbar/>
            <Home/>
           
        </div>
    )
}

export default App;



