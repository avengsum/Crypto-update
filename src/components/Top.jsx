import React, { useEffect } from 'react'
import { useState } from 'react';

const Top = ({image,title,coin,price,market,percentage}) => {

    const [isPercentage, setPercentage] = useState("");


    useEffect(() => {
        setPercentage(percentage);
    },[]);

    

  return (
    <div  className='hover:bg-bg-coin pl-[25px] pr-[25px] pt-[15px] pb-[15px] '
    id="top">
        <div>
            <img src={image} className='w-[24px] inline-block mr-2' alt="" />
            <p className='inline-block text-[14px] font-medium mr-2 text-white hover:text-blue-700 '>{title}</p>
            <span className='text-[14px] font-medium text-white'>{coin}</span>
        </div>
        <div>
            <h1 className='text-[2rem] text-white'>USD {price}</h1>
        </div>
        <div>
            <span className='font-medium pr-2 text-coin-price'>{market}</span>
            <span className={`text-white pl-2 pr-2 rounded-2xl ${isPercentage > 0 ?'bg-green-600':'bg-red-700'}`}>{percentage}%</span>
        </div>
    </div>
  )
}

export default Top;