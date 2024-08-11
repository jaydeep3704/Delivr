import React from "react";
import Slider from "./Slider";
const WOYM = () => {
  return (
    <div className="px-40 mt-10">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-semibold capitalize">
          What's on your mind ?
        </h2>
        <Slider amount={350} className="woym" />
      </div>

      <div className="flex items-center gap-10 px-10 py-5 mx-auto overflow-x-auto overflow-y-hidden bg-gray-100 woym container-snap no-scrollbar no-scrollbar::-webkit-scrollbar">
       
        <div className="h-[150px] w-[120px]  rounded-full flex-shrink-0 flex items-center flex-col">
          <img
            src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
            alt=""
            className="object-cover rounded-full h-[120px] w-[120px]"
          />
          <p className="mt-2 text-lg font-semibold text-gray-600">Burger</p>
        </div>
      </div>
    </div>
  );
};

export default WOYM;
