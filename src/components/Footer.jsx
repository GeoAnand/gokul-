import React, { useState } from "react";
import { RiLinkedinFill } from "react-icons/ri";


function Footer() {


        // Google Form
        
        const [submit, setSubmit] = useState(false);
        const [formData, setFormData] = useState({
            "entry.1594768867": "",
            "entry.834533279": "",
            "entry.1032838797": "",
            "entry.1994865677": ""
        });

        const handleInputData = (input) => (e) => {
            const { value } = e.target;
        
            setFormData((prevState) => ({
                ...prevState,
                [input]: value
            }));
        };

        async function handleSubmit(e) {
            e.preventDefault();
            setSubmit(true);
        
            let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScPq85kdEG9DxI2_swZTPPVDeKdGloelU8my7PMRl7dvZqqng/formResponse?entry.1594768867=${formData["entry.1594768867"]}&entry.834533279=${formData["entry.834533279"]}&entry.1032838797=${formData["entry.1032838797"]}&entry.1994865677=${formData["entry.1994865677"]}`;
        
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                }
            });
        }
        
        // x Google Form x




  return (
    <>
        <div className="mt-9 py-9 bg-black text-white flex md:flex-row flex-col justify-center">
            <div id='aboutus' className='md:mx-11 mx-4 md:w-[35vw]'>
                <h1 className='text-4xl text-center md:text-left font-medium my-3 text-primary'>About Us</h1>
                <p className='text-lg mx-1 md:mx-0 text-justify '>
                    We're a Dedicated and Self-motivated Team that initiates and looks forward to enhancing and evolving as a paramount consumer company in our area of expertise.
                    We're always keeping up with the latest trends and technologies. We're committed to providing our clients with the best possible experience. We'll work closely with you to understand your needs and goals and then we'll develop a custom solution that meets your specific requirements.
                </p>
                <div className='flex items-center flex-col md:flex-row my-6 mx-3 md:mx-0   justify-center md:justify-start'>
                    <h1 className="font-bold text-2xl md:mr-3">Follow us on LinkedIn</h1>
                    <a href="https://www.linkedin.com/company/wolvesmedia/" rel="noreferrer" target={"_blank"} className='flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white p-2 md:text-xl text-4xl rounded-sm md:mr-3 my-3 md:my-0 '>
                        <RiLinkedinFill/> <p className='md:hidden mx-2 font-semibold text-3xl'>linkedIn</p>
                    </a>
                </div>

            </div>
            <div className='md:mx-28 text-center md:text-left'>
                <h1 className='text-4xl font-medium my-3 text-primary'>Our Services</h1>
                <p className='my-3 text-lg'>Ad Monetization</p>
                <p className='my-3 text-lg'>Ad Optimization</p>
                <p className='my-3 text-lg'>User Acquisition</p>
                <p className='my-3 text-lg'>App Marketplace</p>
                <p className='my-3 text-lg'>Branding & Web Solutions</p>
            </div>
            
            <div id='contact' className='md:mx-3 text-center md:text-left'>
                <h1 className='text-4xl font-medium my-3 text-primary'>Contact Information</h1>
          
                <a href="mailto:sales@thejungletechnology.com" className='my-2 text-lg' >Email : sales@thejungletechnology.com</a>
                
                
                {/* Google Form */}

                <div className="contactFormWrapper">
                    <div className="formheader"></div>
                    <div className="formcontact">
                        {submit ? (
                        <div className="afterForm text-primary">Thanks, we will get back to you soon</div>
                        ) : (
                        <form onSubmit={handleSubmit} target="_self">
                            <fieldset className="my-3">
                                <label className="block font-semibold " htmlFor="entry.1594768867">Name</label>
                                <input className="rounded-md py-1 text-black px-3 w-9/12"
                                    required
                                    type="text"
                                    name="entry.1594768867"
                                    onChange={handleInputData("entry.1594768867")}
                                    value={formData["entry.1594768867"]}
                                    placeholder="Enter your name"
                                    autoComplete={+false}
                                />
                            </fieldset>

                            <fieldset className="my-3" >
                                <label className="block font-semibold" htmlFor="entry.834533279">E-mail</label>
                                <input
                                    className="rounded-md py-1 text-black px-3 w-9/12"
                                    required
                                    type="email"
                                    name="entry.834533279"
                                    onChange={handleInputData("entry.834533279")}
                                    value={formData["entry.834533279"]}
                                    autoComplete={+false}
                                    placeholder="Enter your Email address"
                                />
                            </fieldset>

                            <fieldset className="my-3">
                                <label className="block font-semibold" htmlFor="entry.1032838797">App/Web URL</label>
                                <input
                                    className="rounded-md py-1 text-black px-3 w-9/12"
                                    required
                                    type="text"
                                    name="entry.1032838797"
                                    onChange={handleInputData("entry.1032838797")}
                                    value={formData["entry.1032838797"]}
                                    autoComplete={+false}
                                    placeholder="Enter URL of your website"
                                />
                            </fieldset>

                            <fieldset className="my-3">
                                <label className="block font-semibold" htmlFor="entry.1994865677">Mobile No. </label>
                                <input
                                    className="rounded-md py-1 text-black px-3 w-9/12"
                                    required
                                    type="number"
                                    name="entry.1994865677"
                                    onChange={handleInputData("entry.1994865677")}
                                    value={formData["entry.1994865677"]}
                                    autoComplete={+false}
                                    placeholder="Enter your mobile number"
                                />
                            </fieldset>

                            

                            <button className="bg-primary mt-1 px-2 py-1 rounded-md w-9/12 border border-primary hover:bg-black hover:text-primary" type="submit">Submit</button>
                        </form>
                        )}
                    </div>
                </div>

                {/* xx Google Form xx */}

            </div>
        </div>
    </>
  )
}
export default Footer