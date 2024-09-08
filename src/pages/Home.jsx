import React from "react";
import WOYM from "../components/WOYM";
import RestaurantContainer from "../components/RestaurantContainer";
import { useRestaurantData } from "../hooks/useRestaurantData";
import Footer from "../components/Footer";
const Home = () => {
  const { bestPlacesToEat } = useRestaurantData();

  return (
    <div className="w-full">
      <WOYM />
      <RestaurantContainer />
      {bestPlacesToEat.length > 0 && (
        <div className="w-full p-10 px-5 lg:px-44">
          <div className="text-2xl font-semibold">
            Best Places to Eat Accross Cities
          </div>
          <div className="flex flex-wrap mt-5 gap-x-10">
            {bestPlacesToEat.map((item, index) => {
              if (index < 12) {
                return (
                  <div
                    className="w-[350px] py-3 mb-6 text-center text-gray-700 border border-gray-300 text-md rounded-xl cursor-pointer flex-shrink-0"
                    key={item.text}
                  >
                    {item.text}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}

      <Footer/>

    </div>
  );
};

export default Home;
