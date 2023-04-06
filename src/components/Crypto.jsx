import React from 'react'
import {motion} from 'framer-motion'
import Top from './Top'

const Crypto = () => {
  const bitcoin ="https://codewithsadee.github.io/cryptex/assets/images/coin-1.svg"
  const ethereum ="https://codewithsadee.github.io/cryptex/assets/images/coin-2.svg"
  const tether = "https://codewithsadee.github.io/cryptex/assets/images/coin-3.svg"
  const BNB = "https://codewithsadee.github.io/cryptex/assets/images/coin-2.svg"
  return (
    <div className=' bg-bg-gray pb-[40px]'>
        <div className='text-center '>
            <motion.h1
            initial = {{scale : 0.5, opacity:0}}
            transition={{
            duration: 5,ease: [0.5, 0.71, 1, 1.5],}}
            whileInView = {{ opacity:1 ,scale:1}}
             className='text-white text-[3.4rem]'>Top Crypto</motion.h1>
        </div>
        <div className='flex mr-[50px] ml-[50px] justify-around'>
        <Top title="Bitcoin" coin="BTC/USD" image={bitcoin} price="46,168.95" market="36,641.20" percentage="-0.79" />
        <Top title="Etherum" coin="ETH/USD" image={ethereum} price="3,480.04" market="36,641.20" percentage="+10.55" />
        <Top title="Tether" coin="USDT/USD" image={tether} price="1.00" market="36,641.20" percentage="-0.01" />
        <Top title="BNB" coin="BNB/USD" image={BNB} price="443.56" market="36,641.20" percentage="-1.24" />
        </div>
    </div>
  )
}

export default Crypto