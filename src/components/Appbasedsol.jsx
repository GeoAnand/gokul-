import React from 'react'

function Appbasedsol() {
  return (
    <>
        <div id='appm' className='min-h-[90vh] mt-6 md:mt-0 flex flex-col md:flex-row items-center justify-center'>
            <img className='md:w-96 w-60 md:ml-20' src="./assets/app.svg" alt="" />
          
            <div className='md:ml-28'>
                <h1 className='md:text-4xl text-2xl text-center md:text-left font-bold mb-5' >App Marketplace</h1>
                <h1 className='md:text-xl text-md font-medium text-justify md:text-left mx-7 md:mx-0 text-gray-600 md:mr-28' >
                  We would love to give you access to our wide range of networks to facilitate your app buying and/or selling.
                </h1>
                <div className='md:w-[90%] my-7 mx-9 md:mx-0 grid md:grid-cols-2 grid-cols-1 gap-4'>
                  <h1 className='md:text-lg text-md py-2 md:px-5 px-2 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)] bg-white' >Get your app valuation in 24 hours</h1>
                  <h1 className='md:text-lg text-md py-2 md:px-5 px-2 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)] bg-white' >Ask for prices that truly fits with value of your app</h1>
                  <h1 className='md:text-lg text-md py-2 md:px-5 px-2 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)] bg-white' >Looking for assets for investment - we can help you to buy sustainable property in terms of apps and games.</h1>
                  
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Appbasedsol