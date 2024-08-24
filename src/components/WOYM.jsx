import React from "react";
import Slider from "./Slider";
import { whatsonyourmind } from "../constants";
import { CLOUDINARY_WOYM_URL } from "../constants";
const WOYM = () => {
  return (
    <div className="px-5 mt-10 lg:px-60 sm:px-20 xs">
      <div className="flex flex-col justify-between mb-2 md:mb-5 md:flex-row">
        <h2 className="mb-2 text-xl font-semibold capitalize md:text-2xl">
          What's on your mind ?
        </h2>
        <Slider amount={350} className="woym" />
      </div>

      <div className="flex items-center gap-10 px-10 py-5 mx-auto overflow-x-auto overflow-y-hidden woym container-snap no-scrollbar no-scrollbar::-webkit-scrollbar" >
       
       {
        whatsonyourmind.map((element)=>{
          return <div className="md:h-[150px] md:w-[120px] h-[95px] w-[95px]  flex-shrink-0 flex items-center flex-col" key={element.id}>
          <img
            src={`${CLOUDINARY_WOYM_URL}/${element.imageId}`}
            alt=""
            className="object-cover  md:h-[140px] md:w-[140px] h-[95px] w-[95px]"
          />
        </div>
        })
       }


       
      </div>
    </div>
  );
};

export default WOYM;
