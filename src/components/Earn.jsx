import React from 'react'

const Earn = () => {
  return (
    <section className='bg-bg-gray pt-[60px] pb-[80px]' id="earn">
        <div className='pb-[35px]'>
           <h1 className='text-center text-[3.4rem] text-white mb-4'>How It Work</h1> 
           <p className='text-center text-[1.6rem] text-gray-600 mb-4 '>Stacks is a production-ready library of stackable content blocks built in React Native</p>
        </div>
        <div className='grid  grid-cols-4 gap-4 ml-6'>
            <div className=" ml-[40px]">
                <img src="https://codewithsadee.github.io/cryptex/assets/images/instruction-1.png" className='hover:animate-pulse ml-[25px]' alt="" />
                <p className='text-gray-400 ml-[45px]'>STEP 1</p>
                <h1 className='text-white text-[1.6rem] ml-[25px]'>Download</h1>
                <p className='text-gray-400 max-w-[250px] leading-8'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
            </div>
            <div className="">
            <img src="https://codewithsadee.github.io/cryptex/assets/images/instruction-2.png" className='hover:animate-pulse ml-[25px]' alt="" />
                <p className='text-gray-400 ml-[45px]'>STEP 2</p>
                <h1 className='text-white text-[1.6rem] ml-[25px]'>Connect Wallet</h1>
                <p className='text-gray-400 max-w-[250px] leading-8'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
            </div>
            <div className="">
            <img src="https://codewithsadee.github.io/cryptex/assets/images/instruction-3.png" className='hover:animate-pulse ml-[25px] ' alt="" />
                <p className='text-gray-400 ml-[45px]'>STEP 3</p>
                <h1 className='text-white text-[1.6rem] ml-[25px]'>Start Trading</h1>
                <p className='text-gray-400 max-w-[250px] leading-8'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
            </div>
            <div className="">
            <img src="https://codewithsadee.github.io/cryptex/assets/images/instruction-4.png" className='hover:animate-pulse ml-[25px]' alt="" />
                <p className='text-gray-400 ml-[45px]'>STEP 4</p>
                <h1 className='text-white text-[1.6rem] ml-[25px] '>Earn Money</h1>
                <p className='text-gray-400 max-w-[250px] leading-8'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
            </div>

        </div>
    </section>
  )
}

export default Earn