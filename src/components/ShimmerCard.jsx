import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='w-[350px] h-[350px] rounded-3xl p-3  bg-slate-50'> 
        <div className='w-full h-[250px] rounded-2xl bg-slate-100'></div>
        <div className='mt-3 '>
            <div className='w-1/2 h-2 mb-3 rounded-md bg-slate-100'></div>
            <div className='w-1/4 h-2 rounded-md bg-slate-100'></div>
           
        </div>
    </div>
  )
}

export default ShimmerCard
