import React from 'react'

function Projectandblogsection() {
  return (
    <>

    {/* ---------- Hava a Project in mind ------------------- */}
        <div className="px-6 md:py-16 py-9 text-center bg-[url('../public/assets/blueprint.png')] bg-no-repeat bg-cover">
            <h1 className='text-center md:text-5xl text-3xl font-bold md:my-6 my-0 text-white'>Stuck with a doubt in your upcoming project?</h1>
            <p className='md:text-2xl text-lg font-light text-center md:px-36 md:my-11 my-6 text-white'>We come up with resourceful ideas to enhance execution in marketing, remarkable hangups for branding and prop up with web developement and app based solutions.</p>
            <a className='font-medium text-primary bg-white px-4 py-2 rounded-3xl md:text-lg text-2xl hover:bg-transparent hover:text-white hover:border hover:border-white' href="#contact" >CONTACT US</a>
        </div>
    {/* ----x----- Hava a Project in mind --------x---------- */}

    {/* ------------------ BLOG Section --------------------- */}
        <div id='blog' className='m-6 pb-11'>
            <h1 className='text-center text-5xl font-bold my-14 text-gray-700'>Recent Blogs & Articles</h1>

            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 md:mx-16">
                <div className='my-3 md:my-0 shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col  items-center' >
                    <img  src="./assets/blog1.png" alt="" />
                    <h1 className='my-3 mx-8 text-center text-lg font-bold'>Web Development Trends</h1>
                    <p className='text-center md:text-xl text-md font-medium px-5 py-3'>Ready to innovate with your web app in 2022? We have researched the industry and know exactly how you can become the pioneer in your niche</p>
                    <a className='font-medium text-white bg-primary px-4 py-2 mb-6 rounded-3xl text-md hover:bg-white hover:text-primary border border-primary' href="https://clockwise.software/blog/web-development-trends/" target="_blank" rel='noreferrer' >Continue Reading</a>
                </div>
                <div className='my-3 md:my-0 shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col items-center' >
                    <img src="./assets/blog.png" alt="" />
                    <h1 className='my-3 mx-8 text-center text-lg font-bold'>Why Are Brand Values So Important </h1>
                    <p className='text-center md:text-xl text-md font-medium px-5 py-3'>In today's world, we're almost constantly bombarded with infinite choices of where to spend our hard-earned dollars. </p>
                    <a className='font-medium text-white bg-primary px-4 py-2 mb-6 rounded-3xl text-md hover:bg-white hover:text-primary border border-primary' href="https://www.thebrandingjournal.com/2022/06/brand-values/" target="_blank" rel='noreferrer' >Continue Reading</a>
                </div>
                <div className='my-3 md:my-0 shadow-[0_0px_40px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col  items-center' >
                    <img src="./assets/blog3.png" alt="" />
                    <h1 className='my-3 mx-8 text-center text-lg font-bold'>Marketing Is Everything</h1>
                    <p className='text-center md:text-xl text-md font-medium px-5 py-3'>Technology is transforming choice, and choice is transforming the marketplace.Marketing's transformation is driven by the enormous power...</p>
                    <a className='font-medium text-white bg-primary px-4 py-2 mb-6 rounded-3xl text-md hover:bg-white hover:text-primary border border-primary' href="https://hbr.org/1991/01/marketing-is-everything" target="_blank" rel='noreferrer' >Continue Reading</a>
                </div>
               
            </div>
        </div>
    {/* ----------x------- BLOG Section ----------x---------- */}
    </>
  )
}

export default Projectandblogsection