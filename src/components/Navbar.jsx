import React from 'react'
import {motion} from 'framer-motion'
import {HashLink as Link} from 'react-router-hash-link'
import logo from '../assets/images/logo.jpg'

const Navbar = () => {
  return (
    <motion.div
    initial= {{y:-50 , opacity:0 ,}}
    transition = {{type:"spring" ,stiffness: 300,damping: 140,}}
    whileInView = {{y:0 , opacity:1}}

    className="bg-black text-white font-medium">
      <div className='grid grid-cols-3  gap-6 h-[80px]'>
        <div className=" flex justify-center items-center">
          <img src={logo} className='w-[60px] rounded-3xl '/>
          <h1 className='text-[25px] ml-4'>Blocktech</h1>
        </div>
        <div className="  ">
          <nav>
          <ul className='flex justify-between text-[20px] items-center pt-4 pl-4 pr-4'>
              <li className=' pt-[12px] pl-2 pr-2 pb-[12px] transition hover:bg-green-800 cursor-pointer'><Link to='#'>
              Home</Link></li>
              <li className=' pt-[12px] pl-2 pr-2 pb-[12px] hover:bg-green-800 cursor-pointer'>
              <Link to='#top'>Top Crypto</Link></li>
              <li className=' pt-[12px] pl-2 pr-2 pb-[12px] hover:bg-green-800 cursor-pointer'>
              <Link to='#market'>Market</Link></li>
              <li className=' pt-[12px] pl-2 pr-2 pb-[12px] hover:bg-green-800 cursor-pointer'>
              <Link to="#earn">Earn</Link></li>
              <li className=' pt-[12px] pl-2 pr-2 pb-[12px] hover:bg-green-800 cursor-pointer'>
              <Link to='#contact'>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        <div className=" flex justify-center pt-4 items-center ">
          <span className='text-[15px] text-center border-2 p-2 pl-4 pr-4 rounded-3xl  hover:bg-green-800 cursor-pointer'>
            Wallet
          </span>
        </div>
      </div>

    </motion.div>
  )
}

export default Navbar