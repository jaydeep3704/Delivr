import React from "react";
import Slider from "./Slider";
import { whatsonyourmind } from "../constants";
import { CLOUDINARY_WOYM_URL } from "../constants";
const WOYM = () => {
  return (
    <div className="px-40 mt-10">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-semibold capitalize">
          What's on your mind ?
        </h2>
        <Slider amount={350} className="woym" />
      </div>

      <div className="flex items-center gap-10 px-10 py-5 mx-auto overflow-x-auto overflow-y-hidden woym container-snap no-scrollbar no-scrollbar::-webkit-scrollbar" >
       
       {
        whatsonyourmind.map((element)=>{
          return <div className="h-[150px] w-[120px]   flex-shrink-0 flex items-center flex-col" key={element.id}>
          <img
            src={`${CLOUDINARY_WOYM_URL}/${element.imageId}`}
            alt=""
            className="object-cover  h-[140px] w-[140px]"
          />
        </div>
        })
       }


       
      </div>
    </div>
  );
};

export default WOYM;
