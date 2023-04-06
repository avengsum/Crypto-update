import React from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/images/hero.png'
const Hero = () => {
  return (
    <motion.div
    id="hero"
    initial= {{x:-600 ,opacity:0}}
    transition = {{type:"spring", stiffness:300 , damping :144 , delay:0.2}}
    whileInView= {{x:0,opacity:1}}
    className="overflow-hidden" >
        <div className='grid grid-cols-2 text-black  bg-bg-gray gap-1 pb-[42px] overflow-hidden'>
            <div
            className="">
                <div className='grid grid-cols-3 p-[50px] gap-4'>
                    <div className="col-start-1 col-end-6 ">
                      <h1 className='text-[4rem] font-bold text-white'>Check What's Happening in the Crypto Space</h1>
                    </div>
                    <div className="col-start-1 col-end-6 ">
                      <p className='max-w-[400px] text-[25px] font-medium text-gray-400'>Blocktech is a one stop solution for all your crypto related Query</p>
                    </div>
                    <div className="col-start-1 col-end-6 ">
                    <motion.button
                    initial= {{x:-50 ,opacity:0}}
                    transition = {{type:"spring", stiffness:300 , damping :144 , delay:0.5}}
                    whileInView= {{x:0,opacity:1}}
                     className='text-[22px]  pt-2 pb-2 pl-7 pr-7 m-2 font-semibold text-white rounded-[34px] bg-green-800 hover:bg-green-800 hover:opacity-80 cursor-pointer'>Get Started</motion.button>
                    </div>
                  </div>
              </div>

           
            <div className="">
              <img src={hero} className='w-full h-[600px]' alt="" />
            </div>
        </div>
    </motion.div>
  )
}

export default Hero