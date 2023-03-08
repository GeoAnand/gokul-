import React from 'react'
import { VscTools } from 'react-icons/vsc'

function Cards() {
  return (
    <>
        <div className='md:h-[75vh] px-6 mb-8 flex flex-col md:flex-row justify-center items-center'>
            
            <a href='#ad' className='md:mx-6 mx-1 my-5 md:my-0 md:w-1/3 md:h-[90%] rounded-xl flex flex-col items-center  shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br from-primary to-fuchsia-500 hover:text-white'>
          
                <div className='p-4 m-6 bg-gray-200 rounded-full'> <VscTools className='text-3xl text-primary'/> </div> 
                <h1 className='md:text-2xl text-2xl font-bold px-4 text-center'>Ad Monetization and optimization</h1>
                <p className='text-center md:mx-9 mx-3 my-9 md:text-xl text-md'>
                    We give you access to direct Google Admanager demand for your apps and websites. You can choose between a wide variety of ad formats, and optimization strategies for your apps and websites with timely payments.
                </p>
                
            </a>

            <a href='#services' className='md:mx-6 mx-1 my-5 md:my-0 md:w-1/3 h-[90%] rounded-xl flex flex-col items-center  shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br from-primary to-fuchsia-500 hover:text-white'>
          
                <div className='p-4 m-6 bg-gray-200 rounded-full'> <VscTools className='text-3xl text-primary'/> </div> 
                <h1 className='md:text-2xl text-2xl font-bold'>Marketing Services</h1>
                <p className='text-center md:mx-9 mx-3 my-9 md:text-xl text-md'>
                    Our dedicated media planners will help you out to carve the best campaigns on highly competitive platforms such as Google, Facebook, and Apple search ads to acquire high-quality users at the lowest prices possible.
                </p>
                
            </a>

            <a href='#appm' className='md:mx-6 mx-1 my-5 md:my-0 md:w-1/3 h-[90%] rounded-xl flex flex-col items-center  shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br from-primary to-fuchsia-500 hover:text-white'>
          
                <div className='p-4 m-6 bg-gray-200 rounded-full'> <VscTools className='text-3xl text-primary'/> </div> 
                <h1 className='md:text-2xl text-2xl font-bold'>App Marketplace</h1>
                <p className='text-center md:mx-9 mx-3 my-9 md:text-xl text-md'>
                    We would love to give you access to our wide range of networks to facilitate your app buying and/or selling.
                </p>
                
            </a>
        </div>
    </>
  )
}

export default Cards;