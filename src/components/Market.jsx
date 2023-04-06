import { list } from 'postcss';
import { motion } from 'framer-motion';
import React, { useState ,useEffect } from 'react'
import {AiOutlineClose} from 'react-icons/ai'


const Market = () => {
  const [data,setData] = useState([]);
  const [index,setIndex] = useState(10);
  const [isCompleted, setIsCompleted] = useState(false)
  const intialPost = data.slice(0,index)
  const [moreData,setMoreData] = useState([])
  const [close, setClose] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const fetchData = async () =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const list = await response.json()
    setData(list)
  }

  const showLess = () => {
    if(index > 10 ){
      setIndex(index - 10)
    }
    
  }

  const loadMore = () => {
    setIndex(index + 10);
    if(index >= data.length){
      setIsCompleted(true)
    }
    else{
      setIsCompleted(false)
    }
  }
  const fetechMore = async (name) =>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
    const info = await res.json();
    setMoreData(info)
  }
  

  useEffect(() =>{
    fetchData();

  },[])

  const morePara= () => {
    paraRef.current.value = ""
    console.log(paraRef.current.value)
  }

  

  


  return (
    <div
    className='bg-black pt-[100px]'
    id='market'>
          <div>
        <h1 className='text-center text-white text-[3.4rem] mb-6'>Market</h1>
      </div>

<div className="relative overflow-x-auto bg-black ">
    <table className={`w-full text-sm text-left text-gray-500 bg-black dark:text-gray-400 ${close ? 'invisible' : 'visible'}`}>
        <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
            <tr >
                <th scope="col" className="px-6 py-3">
                  Name  
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    24%
                </th>
                <th scope="col" className="px-6 py-3">
                    Market Cap
                </th>
                <th scope="col" className="px-6 py-3">
                    Rank
                </th>
                <th scope="col" className="px-6 py-3">
                    More Info
                </th>
            </tr>
        </thead>
        {intialPost.map((x,index) => (
          <tbody>
          <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900 bg-black">
              <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
               <img src={`${x.image}`} className="w-[20px] text-gray-800" alt="" />
                 {x.name}
              </th>
              <td className="px-6 py-4">
                  ${x.current_price}
              </td>
              <td className={`px-6 py-4 ${x.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {x.price_change_percentage_24h}%
              </td>
              <td className="px-6 py-4">
                  ${x.market_cap}
              </td>
              <td className="px-6 py-4">
                  {x.market_cap_rank}
              </td>
              <button className='px-4 mt-5 py-2 border-[2px] flex justify-center items-center
              text-white bg-gradient-to-r from-emerald-500 to-lime-600 mr-4 p-2 rounded-md '
              onClick={() =>{
                fetechMore(x.id)
                setClose(!close)
              }}>More Info</button>
              </tr>
              </tbody>
        ) )}
   </table>
   <div className={`d-grid mt-3 mb-5 ${close ? 'invisible' : 'visible'} `}>
          {
            isCompleted ? (
              <button onClick={loadMore} type="button"
              className="btn btn-danger disabled text-white">
                End
              </button>
            ):
            (
              <div className='flex justify-center'>
              <button className='text-white bg-gradient-to-r from-emerald-500 to-lime-600 mr-4 p-2 rounded-md ' onClick={loadMore}>
                Load More
              </button>
              <button className={`text-white bg-gradient-to-r ${index > 10 ? 'visible' : 'invisible'} from-emerald-500 to-lime-600 mr-4 p-2 rounded-md`} onClick={showLess}>
                Show Less
              </button>
              </div>
            )

          }
        </div>
    <div className={`absolute top-0 left-[250px] z-20 ${close ? 'visible' : 'invisible'}`} >
      <div className=' relative w-[1000px] h-[500px]'>
        <div className='flex flex-col items-center'>
          <img src={moreData?.image?.large} className="w-[200px]" alt="coin" />
          <h1 className='text-white text-[2.5rem]'>{moreData?.name}</h1>
        </div>
        <div>
          <p className='text-white inline'>{showMore ? moreData?.description?.en :`${moreData?.description?.en.substring(0,400)}`}</p>
          <button onClick={() => setShowMore(!showMore)}  className='text-white bg-red-400 p-2 ml-4 rounded-xl '>{showMore ? '  Show Less' : '  Show More'}</button>
        </div>
        <h1 className='text-white text-[1.5rem] ml-[200px] mt-4'>Current Price(INR) : {moreData?.market_data?.current_price?.inr}</h1>
        <h1 className='text-white text-[1.5rem] ml-[200px] mt-4'>Rank : {moreData?.market_cap_rank}</h1>
        <h1 className='text-white text-[1.5rem] ml-[200px] mt-4'>Max Supply : {moreData?.market_data?.max_supply}</h1>
        <h1 className='text-white text-[1.5rem] ml-[200px] mt-4'>Block Time(in min) : {moreData?.block_time_in_minutes}</h1>
        <a className='text-white text-[1.5rem] ml-[200px] mt-4' href={moreData?.links?.homepage}>Link</a>
        <button onClick={() => setClose(!close)}><AiOutlineClose  className='bg-white w-[40px] h-[40px] absolute top-0 right-5'/></button>
      </div>
      </div>
</div>

    </div>
  )
}

export default Market