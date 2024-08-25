import React,{useState} from 'react'

import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const[searchText,setSearchText]=useState('')
  console.log(searchText)
  return (
    <>
       
        <div className='w-full flex justify-center'>
            <div className='lg:w-1/2 w-full mx-3 my-10 flex items-center border border-gray-400 px-5'>
               
                <input type="text" placeholder='Search For Restaurants and Food'
                className='w-full py-2 outline-none border-none font-semibold'
                onChange={(e)=>{setSearchText(e.target.value)}}
                value={searchText}
                />
                <FaSearch className='text-xl text-gray-400'/>
            </div>
        </div>
        
    </>
  )
}

export default Search
