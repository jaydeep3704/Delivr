import React from 'react';
import { useRouteError } from 'react-router-dom';
const PageNotFound = () => {

  const error=useRouteError()
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <svg
          className="w-24 h-24 mx-auto mb-6 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2 4 4 4-4 4 4 2-2m-2 2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v9m0 4h14a2 2 0 002-2v-6m-4 2h-4"
          />
        </svg>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{error.status} : {error.statusText}</h1>
        <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold">
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
