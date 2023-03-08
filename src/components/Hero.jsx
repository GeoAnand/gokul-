import React from 'react'

function Hero() {
  return (
    <>
        <div className="container flex flex-col md:flex-row items-center justify-center md:mt-6 mt-5 md:min-h-[75vh] h-fit">
            <div className="md:mr-32 md:pl-9 text-center md:text-left">
                <h1 className='text-3xl md:text-5xl font-bold'>Foster Growth with</h1>
                <h1 className='text-3xl md:text-5xl mb-6 font-bold px-2 md:px-0'>Ingenious Blend in <span className='text-primary'>Technology</span></h1>
                <h2 className='text-md md:text-2xl my-6 text-gray-800 md:text-justify md:pr-9 px-11 md:px-0'>A platform that fuels your entire mobile app's growth across User Acquisition, Monetization & Analytics.</h2>
                <div className='md:mt-11 mt-8 text-center md:text-left'>
                  <a className='font-medium  text-white bg-primary px-4 py-2 rounded-3xl md:text-lg text-2xl  hover:bg-white hover:text-primary border border-primary' href="#contact" >CONTACT US</a>
                </div>
            </div>

            <img className='md:h-96 h-60 md:mt-0 mt-9 md:mr-6' src="./assets/hero.svg" alt="" />
            
        </div>
    </>
  )
}

export default Hero