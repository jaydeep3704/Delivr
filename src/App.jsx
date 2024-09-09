import React,{lazy,Suspense} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";
import RestaurantMenuShimmer from "./components/RestaurantMenuShimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./pages/Cart";

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

const RestaurantMenu=lazy(()=>import("./pages/RestaurantMenu"))


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
        element:<Suspense fallback={<RestaurantMenuShimmer/>}><RestaurantMenu/></Suspense>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])




const App = () => {
  return (
    <div>
     <Provider store={appStore}>
      <RouterProvider router={router}/>
     </Provider>
    </div>
  );
};

export default App;
