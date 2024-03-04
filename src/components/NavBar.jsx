import React from 'react';
import {useState} from "react";
import { Link } from 'react-router-dom';


function NavBar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav>
        <div className="flex flex-col md:flex-row  justify-between mt-1">

          <div className='flex justify-between m-3 md:m-0'>
            <img src="./assets/LOGO-updated.png" alt="" className="md:h-20 h-14 md:ml-14 " />

            <div className="md:hidden flex items-center">
                              <button
                                  className=" rounded-md outline-none"
                                  onClick={() => setNavbar(!navbar)}
                              >
                                  {navbar ? (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-9 h-9"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  ) : (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-9 h-9"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                      >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M4 6h16M4 12h16M4 18h16"
                                          />
                                      </svg>
                                  )}
                              </button>
                          </div>

          </div>


          <ul className={`md:flex md:flex-row  items-center md:mr-16  text-gray-700  ${
                            navbar ? "flex flex-col h-[60vh] justify-center" : "hidden"
                        } `} >
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg' href="/" >Home</a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg' href="/aboutus" >About us</a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg' href="/advertiser" >Advertiser</a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg' href="/publisher" >Publisher</a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg flex' href="/Our-Services"  >Services </a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg flex' href="#blog"  >Blog </a> </li>
            <li className='mx-3 my-3 md:my-0' > <a className='font-medium hover:text-primary text-3xl md:text-lg' href="#contact" >Contact</a> </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar