import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RxTarget } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { setLocationSearchVisible } from "../utils/locationSlice";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

const LocationSearch = () => {
  const isSearchVisible = useSelector(
    (store) => store.location.locationSearchVisible
  );
  const dispatch = useDispatch();
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
                <input type="text" className="w-full px-10 py-2 border border-gray-200 shadow-md outline-none" placeholder="Enter a Pincode"/>
              </div>
              <div className="w-full h-[800px] overflow-y-scroll px-5 no-scrollbar ">

                    <div className="flex items-center gap-5 py-5 border-b-2 border-gray-400 border-dotted">
                        <div><IoLocationOutline className="text-3xl"/></div>
                        <div>
                         <div className="flex items-center gap-3 text-lg font-semibold ">Area Name</div>
                          <div className="text-gray-600 text-md">District , State</div>
                        </div> 
                    </div>
                    
              </div>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default LocationSearch;
