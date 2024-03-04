import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { MdOutlineSwipe } from "react-icons/md";

function Teamandclients() {
  return (
    <>
        {/* <h1 className='text-5xl font-bold text-center my-9 text-gray-700'>Expert Team Member</h1>

        <Splide className='mx-9 my-14'
            options={ {
                    gap   : '2rem',
                    perPage: 4,
                    // arrows: false
                } } 
            aria-label="My Favorite Images">
                <SplideSlide>
                    <img src="./assets/teammem.png" alt="team"/>
                    <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                    <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/teammem.png" alt="team"/>
                    <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                    <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/teammem.png" alt="team"/>
                    <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                    <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/teammem.png" alt="team"/>
                    <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                    <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/teammem.png" alt="team"/>
                    <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                    <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                </SplideSlide>
        </Splide> */}

{/* -------------------------- Our Client Section ------------------------------------- */}
        <h1 className='text-5xl font-bold text-center my-9 text-gray-700'>Our Client Say</h1>

        <h1 className='text-xl font-bold flex items-center justify-center text-gray-500 '> Swipe <MdOutlineSwipe className='mx-2'/> </h1>

        <Splide className='md:mx-9  md:p-12 py-6'
            options={ {
                    gap   : '1rem',
                    perPage: 3,
                    arrows: false,
                    breakpoints: {
                        600: {
                            perPage: 1,
                        } 
                    }
                } } 
            aria-label="My Favorite Images">
                <SplideSlide className='md:p-9 p-5 my-9'>
                    <div className='py-9 h-[40vh] shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center' >
                        
                        <p className='text-lg font-medium text-center my-4 mx-5 text-gray-600'> <span className='text-3xl text-gray-300'>"</span>   Marketing strategies provided by them were top notch. We loved the company's work and base provided by them. <span className='text-3xl text-gray-300'>"</span> </p>
                        {/* <img className='w-16 h-16 rounded-full' src="./assets/teammem.png" alt="team"/>
                        <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                        <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                         */}
                    </div>
                </SplideSlide>
                <SplideSlide className='md:p-9 p-5 my-9'>
                    <div className='py-9 h-[40vh] shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center' >
                        
                        <p className='text-lg font-medium text-center my-4 mx-5 text-gray-600'> <span className='text-3xl text-gray-300'>"</span> They provided us Amazing and sci-fi solutions for our brodcasting company, grateful for such assessment for our sites. <span className='text-3xl text-gray-300'>"</span> </p>
                        {/* <img className='w-16 h-16 rounded-full' src="./assets/teammem.png" alt="team"/>
                        <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                        <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                         */}
                    </div>
                </SplideSlide>
                <SplideSlide className='md:p-9 p-5 my-9'>
                    <div className='py-9 h-[40vh] shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center' >
                        
                        <p className='text-lg font-medium text-center my-4 mx-5 text-gray-600'> <span className='text-3xl text-gray-300'>"</span> Applied here for self aid and solutions in app based doubts and got fine responses and solutions for our organisation.<span className='text-3xl text-gray-300'>"</span> </p>
                        {/* <img className='w-16 h-16 rounded-full' src="./assets/teammem.png" alt="team"/>
                        <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                        <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                         */}
                    </div>
                </SplideSlide>
                <SplideSlide className='md:p-9 p-5 my-9'>
                    <div className='py-9 h-[40vh] shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center' >
                        
                        <p className='text-lg font-medium text-center my-4 mx-5 text-gray-600'> <span className='text-3xl text-gray-300'>"</span>   Marketing strategies provided by them were top notch. We loved the company's work and base provided by them. <span className='text-3xl text-gray-300'>"</span> </p>
                        {/* <img className='w-16 h-16 rounded-full' src="./assets/teammem.png" alt="team"/>
                        <h1 className='text-xl font-bold text-center mt-3'>Lewis Lucas</h1>
                        <h1 className='text-xl font-bold text-center text-primary'>IT Manager</h1>
                         */}
                    </div>
                </SplideSlide>
                
                
        </Splide>
    </>
  )
}

export default Teamandclients