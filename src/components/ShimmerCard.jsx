import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='w-[250px] h-[250px] md:w-[325px] md:h-[325px] rounded-3xl p-3  '> 
        <div className='w-full md:h-[200px] h-[175px] rounded-2xl bg-slate-100 animate-pulse'></div>
        <div className='mt-3 '>
            <div className='w-1/2 h-2 mb-3 rounded-md bg-slate-100 animate-pulse'></div>
            <div className='w-1/4 h-2 rounded-md bg-slate-100 animate-pulse'></div>
           
        </div>
    </div>
  )
}

export default ShimmerCard
