import React, { useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'



const smoothScroll = (amount, element) => {
  element.scrollTo({
    left: amount,
    behavior: 'smooth' 
  });
};

const Slider=(props)=>{
  const scrollItemRef=useRef(null)
  
  useEffect(()=>{
    scrollItemRef.current=document.querySelector(`.${props.className}`)
    console.log(scrollItemRef.current)
  },[props.className])

  
   const handleScroll=(direction)=>{
    if(direction=="left")
    {
      smoothScroll(-props.amount,scrollItemRef.current)
    }
    else if(direction=="right")
    {
      smoothScroll(props.amount,scrollItemRef.current)
    }
   }
 
  return (
    
    <div className='flex items-center right-4'>
      <div onClick={() => handleScroll('left')} className='flex items-center bg-[#e2e2e7] mr-3 rounded-full p-2 cursor-pointer'><FaArrowLeft className='text-[#02060ceb] text-base'/></div>
        
      <div onClick={() => handleScroll('right')} className='flex items-center bg-[#e2e2e7] rounded-full p-2 cursor-pointer'><FaArrowRight className='text-[#02060ceb] text-base'/></div>
    </div>

   
  )

}




export default Slider
