import React from "react";

function Ourservices() {
    return (
      <>
      <div class="">
      <div class="advcard-head">
        <h1 class="text-black">Our Services</h1>
      </div>
      <div class="py-5 text-justify container about">
        <div class="row py-lg-5 ">
        <div className='md:w-[100%] my-7 grid grid-cols-3 gap-4'>
              <h1 class="Service-btn" ><a href="#">Ad Monetization</a></h1>
              <h1 class="Service-btn" ><a href="#">App Marketplace</a></h1>
              <h1 class="Service-btn" ><a href="#">Ad Monetization</a></h1>
            </div>
            <div className='md:w-[100%] my-7 grid grid-cols-2 gap-4'>
              <h1 class="Service-btn" ><a href="#">User Acquisition</a></h1>
              <h1 class="Service-btn" ><a href="#">Branding & Web Solutions</a></h1>
            </div>

        </div>
      </div>
      </div>
      </>
  )
}

export default Ourservices;