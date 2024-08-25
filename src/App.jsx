import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Search from "./pages/Search";

import Navbar from "./components/Navbar";
import { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./pages/RestaurantMenu";
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

const AppLayout=()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<PageNotFound/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/search',
        element:<Search/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      }
    ]
  }
])




const App = () => {
  return (
    <div>
     
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
