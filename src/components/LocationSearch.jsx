import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxTarget } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {addLocation, setLocationSearchVisibleaddLocation, setCurrentLocation, removeLocation ,setLocationSearchVisible } from "../utils/locationSlice";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

import { apiKey } from "../constants";
const LocationSearch = () => {
  const isSearchVisible = useSelector(
    (store) => store.location.locationSearchVisible
  );

  const [locations,setLocations]=useState([])
  const [pincode,setPincode]=useState("")
  
  const dispatch = useDispatch();

  const currentLocation=useSelector((store)=>store.location.currentLocation)
  const locationArray=useSelector((store)=>store.location.selectedLocations)

  const fetchLocationInfo=async ()=>{
    const url = `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setLocations(result)
        } catch (error) {
            console.error(error);
        }
  }
  
  useEffect(()=>{
    if(pincode.toString().length===6)
    {
        fetchLocationInfo()
    }
  },[pincode])
  
  const handleAddLocation=(location)=>{
    
    dispatch(addLocation(location))
    dispatch(setCurrentLocation(location))
   
  }


  return (

    <div>

    {/* layer */}
      {isSearchVisible && (
        <div className="w-full opacity-45 bg-black z-[50] fixed h-full "></div>
      )}


      {/* location-search-box */}
      <AnimatePresence>
        {isSearchVisible && (
          <motion.div
            className="fixed top-0 left-0 w-[35%] z-[100]  h-full opacity-100 bg-white pl-60 py-10 pr-10"
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <div className="flex flex-col w-full gap-8">

              <RxCross2 className="text-2xl" onClick={() => dispatch(setLocationSearchVisible(false))}/>
              <div className="flex w-full">
                <input type="text" className="w-full px-10 py-2 border border-gray-200 shadow-md outline-none" placeholder="Enter a Pincode" onChange={(e)=>setPincode(e.target.value)}/>
              </div>
              <div className="w-full h-[800px] overflow-y-scroll px-5 no-scrollbar ">
                {
                    locations.length>0 && pincode!=="" ? locations.map((location)=>{
                        return (
                            <div className="flex items-center gap-5 py-5 border-b-2 border-gray-400 border-dotted cursor:pointer" onClick={()=>handleAddLocation(location)}>
                            <div><IoLocationOutline className="text-3xl hover:text-orange-600"/></div>
                            <div>
                             <div className="flex items-center gap-3 text-lg font-semibold hover:text-orange-600">{location.area}</div>
                              <div className="text-gray-600 text-md">{location.district} , {location.state}</div>
                            </div> 
                        </div>
                        )
                    }):locationArray.map((location)=>{
                        return (
                            <div className="flex items-center gap-5 py-5 border-b-2 border-gray-400 border-dotted cursor-pointer" onClick={()=>handleAddLocation(location)}>
                            <div><IoLocationOutline className="text-3xl hover:text-orange-600"/></div>
                            <div>
                             <div className="flex items-center gap-3 text-lg font-semibold hover:text-orange-600 ">{location.area}</div>
                              <div className="text-gray-600 text-md">{location.district} , {location.state}</div>
                            </div> 
                        </div>
                        )
                    })
                }
                   
                    
              </div>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default LocationSearch;
