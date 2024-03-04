import React from 'react'

function Performancem() {
  return (
    <>
        <div id='services' className='md:min-h-[90vh]  flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100'>
          
          <div className='md:mx-28 mx-3'>
            <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center md:text-left' >Marketing services</h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              Our dedicated media planners will help you out to carve the best campaigns on highly competitive platforms such as Google, Facebook, and Apple search ads to acquire high-quality users at the lowest prices possible.
            </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              Performance Marketing - Let's leverage the most efficient paid media channels like Apple Search Ads (ASA), Google Ads App Campaigns, Facebook ads, influencer marketing, or whatever channel aligns best with your app marketing strategy goals
            </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              ASO - Make sure your organic acquisition game is strong through a rock-solid App Store Optimization (ASO) strategy. We'll help you get there.
            </h1>
            {/* <div className='md:w-[80%] my-7 grid grid-cols-2 gap-4'>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Native Advertising</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Content Marketing</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Social Media</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Banner (Display) Ads</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Search Engine Marketing (SEM)</h1>
            </div> */}
          </div>
           
           <img className='md:w-96 w-60 md:mr-20' src="./assets/section3.svg" alt="" />
        </div>
    </>
  )
}

export default Performancem