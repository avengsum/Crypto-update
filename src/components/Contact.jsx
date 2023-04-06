import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black-contact pt-[70px] pb-4' id="contact">
        <div className='grid grid-cols-2 '>
            <div className='ml-[52px]'>
              <div className='flex  mb-4'>
                <img src="https://codewithsadee.github.io/cryptex/assets/images/logo.svg" className='w-[50px]' alt="" />
                <h1 className='text-[1.6rem] text-white'>Cryptex</h1>
              </div>
              <div>
              <h2 className='text-white mb-2'>Let's talk! 🤙</h2>
              <span className='text-gray-600 mb-1'>+12 3456789101</span>
              <p className='text-gray-600 mb-1'>hello.cryptex@gmail.com</p>
              <address className='w-[332px] text-gray-600 mb-1'>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</address>
              </div>
            </div>
            <div className='grid grid-cols-4 mr-[100px] '>
              <div className="">
                <h2 className='mb-4 text-white'>PRODUCTS</h2>
                <ul className='cursor-pointer'>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>Spot</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>Inverse Perpetual</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>USDT Perpetual</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>Exchange</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>Launchpad</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600 '>Binance Pay</li>
                </ul>
              </div>
              <div className="">
              <h2 className='mb-4 text-white'>SERVICES</h2>
                <ul className='cursor-pointer'>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Buy Crypto</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Markets</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Trading Fee</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Affiliate Program</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Referral Program</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>API</li>
                </ul>
              </div>
              <div className="">
              <h2 className='mb-4 text-white'>SUPPORT</h2>
                <ul className='cursor-pointer'>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Bybit Learn</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Help Center</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>User Feedback</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Submit a request</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>API Documentation</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Trading Rules</li>
                </ul>
              </div>
              <div className="mr-[10px]">
              <h2 className='mb-4 text-white'>ABOUT US</h2>
                <ul className='cursor-pointer'>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>About Bybit</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Authenticity Check</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Careers</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Business Contacts</li>
                  <li className='mb-1 text-gray-600 hover:text-blue-600'>Blog</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact