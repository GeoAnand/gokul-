import React from 'react'

function AdMo() {
  return (
    <>
        <div id='ad' className='md:min-h-[90vh] pt-6 md:pt-0 flex-col-reverse md:flex-row flex items-center justify-center bg-gray-100'>
          
          <div className='md:mx-28 mx-3'>
            <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center md:text-left md:mt-14'> Ad Monetization and optimization  </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-18 text-justify md:text-left mx-4 md:mx-0 md:my-3' >
              We give you access to direct Google Admanager demand for your apps and websites. You can choose between a wide variety of ad formats, and optimization strategies for your apps and websites with timely payments. 
            </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-18 text-justify md:text-left mx-4 md:mx-0 md:my-3' >
              We will be your extended monetization team which can help you optimize your existing revenue through Admob, Facebook, Unity or any other demand networks while being policy compliant and not hampering user engagement and retention.
            </h1>
            <div className='md:w-[100%] my-7 grid grid-cols-2 gap-4'>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Get access to 3rd party demands</h1>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Be policy compliant always</h1>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Timely and trusted payments</h1>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Best in class optimization</h1>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >15 days of free consultation on your existing monetization stack</h1>
              <h1 className='md:text-lg text-md py-2 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Mediation and header bidding solution</h1>
            </div>
          </div>
           
           <img className='md:w-96 w-60 md:mr-20' src="./assets/web.svg" alt="" />
        </div>
    </>
  )
}

export default AdMo