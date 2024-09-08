import React from 'react'

const RestaurantMenuShimmer = () => {
  return (
    <div className='flex justify-center w-full px-3 py-10'>
        <div className='w-full lg:w-1/2'>
        <div className='w-full h-[250px] bg-white rounded-3xl'>
            <div className='w-1/3 h-5 bg-slate-100 animate-pulse' ></div>
            <div className='w-full h-[80%] rounded-xl bg-slate-100 mt-5 animate-pulse'>
            </div>
        </div>
        <div className='flex w-full gap-10 mt-5'>
          <div className='w-1/2'>
              <div className='w-full bg-slate-100 h-[250px] rounded-xl animate-pulse'></div>
              <div className='flex flex-col gap-3 mt-3'>
                  <div className='w-1/2 h-2 bg-slate-100 animate-pulse'></div>
                  <div className='w-1/3 h-[7px] bg-slate-100 animate-pulse'></div>
                  <div className='flex items-center justify-between w-full'><span className='w-1/4 h-[6px] bg-slate-100 animate-pulse'> </span> <span className='w-12 h-5 bg-slate-100 animate-pulse'></span></div>
              </div>
          </div>
          <div className='w-1/2'>
              <div className='w-full bg-slate-100 h-[250px] rounded-xl animate-pulse'></div>
              <div className='flex flex-col gap-3 mt-3 '>
                  <div className='w-1/2 h-2 bg-slate-100 animate-pulse'></div>
                  <div className='w-1/3 h-[7px] bg-slate-100 animate-pulse'></div>
                  <div className='flex items-center justify-between w-full'><span className='w-1/4 h-[6px] bg-slate-100 animate-pulse'> </span> 
                  <span className='w-12 h-5 bg-slate-100 animate-pulse'></span></div>
              </div>
          </div>
          
           
           
           
           
        </div>
        </div>
      
    </div>
  )
}

export default RestaurantMenuShimmer
