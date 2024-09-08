import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {PNF} from "../assets/pagenotfound.jpeg"
const PageNotFound = () => {

  const error=useRouteError()
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 text-center bg-white shadow-lg rounded-3xl md:flex">
       <div className='w-[400px] '>
          <img src="https://static.frieze.com/files/inline-images/new-site2.jpeg" alt="" className='object-cover w-full h-full'/>
       </div>
        <div className='flex flex-col justify-center gap-3'>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">{error.status} : {error.statusText}</h1>
        <p className="mb-6 text-lg text-gray-700">Oops! The page you're looking for doesn't exist.</p>
         <Link className='text-2xl font-bold text-indigo-700' to={'/'}>Go Back To Homepage</Link>
        </div>
       
      </div>
    </div>
  );
};

export default PageNotFound;
