import React from "react";


function Advcard() {
  return (
    <>

      {/* <div class ="advhero">
      <div className="row">
      <div class="col-md-6 col-sm-12">
          <h3><VscTools/> Adventure</h3>
        </div>
        <div class="col-md-6 col-sm-12">
          <img src="/images/adventure.jpg" alt="" />
        </div>     
      </div>
    </div> */}
      <div class="advhero">
        <div className='md:min-h-[90vh]  flex flex-col-reverse md:flex-row items-center justify-center'>

          <div className='md:mx-28 mx-3 advtext'>
            <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center md:text-left' >Discover the programmatic advertising platform used by exceptional digital marketers like you.</h1>
            {/* <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              Our dedicated media planners will help you out to carve the best campaigns on highly competitive platforms such as Google, Facebook, and Apple search ads to acquire high-quality users at the lowest prices possible.
            </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              Performance Marketing - Let's leverage the most efficient paid media channels like Apple Search Ads (ASA), Google Ads App Campaigns, Facebook ads, influencer marketing, or whatever channel aligns best with your app marketing strategy goals
            </h1>
            <h1 className='md:text-xl text-md font-medium text-gray-600 md:pr-24 text-justify md:text-left mx-4 md:mx-0 mb-4 md:my-5' >
              ASO - Make sure your organic acquisition game is strong through a rock-solid App Store Optimization (ASO) strategy. We'll help you get there.
            </h1> */}
            {/* <div className='md:w-[80%] my-7 grid grid-cols-2 gap-4'>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Native Advertising</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Content Marketing</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Social Media</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Banner (Display) Ads</h1>
              <h1 className='md:text-lg text-md md:py-2 py-1 px-5 hover:bg-gradient-to-r from-primary to-fuchsia-600 hover:text-white font-medium bg-white' >Search Engine Marketing (SEM)</h1>
            </div> */}
          </div>

          <img className='md:w-96 w-60 md:mr-20 advimg' src="./assets/adv_text.png" alt="" />
        </div>
      </div>



      <div class="advcard-head">
        <h1>Powerful features to boost <br></br> your productivity</h1>
      </div>
      <div className="advcard-sec">

        <div class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="../assets/Icon_1.png" alt="" />
              </figure>
              <div class="article-body">
                <h2>Strong Targeting Capabilities</h2>
                <p>
                  Deep level targeting with Geo Fencing, Lat-long, city, traffic type, time of day & connection type level targeting for better brand discovery.
                </p>
                <a href="#contact" class="read-more">
                  Learn more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>

            <div class="article-wrapper">
              <figure>
                <img src="../assets/Icon_2.png" alt="" />
              </figure>
              <div class="article-body">
                <h2>Quality Traffic at scale</h2>
                <p>
                  100% filtered inventory with reliable scanning tools across websites, apps and connected TV channels.
                </p>
                <a href="#contact" class="read-more">
                  Learn more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>

            <div class="article-wrapper">
              <figure>
                <img src="../assets/Icon_3.png" alt="" />
              </figure>
              <div class="article-body">
                <h2>Automated reporting</h2>
                <p>
                  The stats regarding campaign performance can be generated on-demand in convenient reports.
                </p>
                <a href="#contact" class="read-more">
                  Learn more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

    </>
  )
}

export default Advcard;