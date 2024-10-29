import React, { useEffect, useState, useCallback } from 'react';
import { SWIGGY_API, CLOUDINARY_RESTAURANT_URL } from '../constants.js';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'; // Make sure to install lodash if not already installed

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [resData, setResData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  // Fetch restaurant info
  const fetchResInfo = async () => {
    try {
      const lat = 18.516726;
      const long = 73.856255;
      const data = await fetch(SWIGGY_API(lat, long));
      const json = await data.json();
      const restaurantInfoList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      const selectedProperties = restaurantInfoList.map(res => ({
        id: res.info.id,
        name: res.info.name,
        imageId: res.info.cloudinaryImageId
      }));
  
      setResData(selectedProperties);
      setFilteredData([]);
    } catch (error) {
      console.log("Search Page :",error)
    }
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  // Debounced search handler
  const handleSearch = useCallback(_.debounce(() => {
    if (searchText.trim() !== "") {
      const data = resData.filter(res =>
        res.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(data);
    } else {
      setFilteredData([]);
    }
  }, 300), [searchText, resData]);

  useEffect(() => {
    handleSearch();
  }, [searchText, handleSearch]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className='flex flex-col items-center w-full px-10'>
        <div className='flex items-center w-full px-5 mx-3 my-10 border border-gray-400 lg:w-1/2'>
          <input
            type="text"
            placeholder='Search For Restaurants'
            className='w-full py-2 font-semibold border-none outline-none'
            onChange={handleChange}
            value={searchText}
          />
          <FaSearch className='text-xl text-gray-400' />
        </div>
        <div className='flex flex-col items-center w-full lg:w-1/2'>
          {
            filteredData.map((res) => (
              <div
                className='flex items-center w-full gap-5 py-3 overflow-hidden rounded-md cursor-pointer hover:bg-slate-100'
                onClick={() => navigate(`/restaurants/${res.id}`)}
                key={res.id}
              >
                <div className='w-[70px] h-[70px]'>
                  <img
                    src={`${CLOUDINARY_RESTAURANT_URL}/${res.imageId}`}
                    alt=""
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <div className='font-semibold text-md'>{res.name.toUpperCase()}</div>
                  <div className='text-sm text-gray-600'>Restaurant</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Search;
