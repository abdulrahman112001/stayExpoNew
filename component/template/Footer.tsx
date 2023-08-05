import React from "react";
import Logo from "../atoms/Logo";
import img from "../../../public/assets/footer-payments.png";
import img2 from "../../../public/assets/footer-sectigo.png";
import LogoWhite from "../atoms/LogoWhite";
import Image from "next/image";
import Link from "next/link";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandTelegram, IconBrandYoutube, IconLocation, IconMail, IconPhone } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";


function Footer() {
  return (
    <>
      <footer className=" bg-slate-950">
        <main className="p-5 md:p-10 bg-slate-900">
          <div className="text-white">
            <li className="flex flex-row max-sm:flex-col justify-between">
              <div className="">
                <Link href="/" >
                  <LogoWhite />
                </Link>
              </div>
              <div>
              <div className="flex flex-row   items-center max-sm:mt-3 ">
                <Link href="/" className="p-1 mr-2  rounded-full border border-gray-600 border-solid ">
                  <IconBrandFacebook className="text-gray-600 " />
                </Link>
               
                <Link href="/" className="p-1  mr-2 rounded-full border border-gray-600 border-solid ">
                  <IconBrandYoutube className="text-gray-600" />
                </Link>
                <Link href="/" className="p-1  mr-2 rounded-full border border-gray-600 border-solid ">
                  <IconBrandInstagram className="text-gray-600" />
                </Link>
                <Link href="/" className="p-1 mr-2 rounded-full border border-gray-600 border-solid ">
                  <IconBrandTelegram className="text-gray-600" />
                </Link>
                <Link href="/" className="p-1  mr-2 rounded-full border border-gray-600 border-solid ">
                  <IconBrandTwitter className="text-gray-600" />
                </Link>
               
              </div>
              </div>
            </li>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1 gap-7">

              <ul className="lg:col-span-4 md:col-span-2 sm:col-span-1 mt-5 ">
                <h6 className="w-[100px] border-b border-b-[#8900a1] py-2">About</h6>
                <li className="text-gray-600 py-3"> 
                    We are a travel business that specializes in hotel
                    accommodations for business travel and are looking to expand
                    our offerings shortly to include car rental and airline
                    tickets (offline).
                </li>
              </ul>
           
              <ul className="lg:col-span-2 md:col-span-1 sm:col-span-1  lg:mt-5 lg:mb-5  ">
                <h6 className="w-[100px]  border-b border-b-[#8900a1] py-2">Quick Links</h6>
                <li className="pt-2 "> 
                   <Link className="text-gray-600 font-semibold text-sm hover:text-white " href="/about" > About Us</Link>
                </li>
                <li className=""> 
                   <Link className="text-gray-600 font-semibold hover:text-white   text-sm " href="/advantage" > Services</Link>
                </li> 
                <li className=""> 
                   <Link className="text-gray-600 font-semibold hover:text-white  text-sm" href="/privacy-policy" > Privacy Policy</Link>
                </li>
                <li className=""> 
                   <Link className="text-gray-600 font-semibold hover:text-white  text-sm" href="/terms-of-use" >Terms of Use</Link>
                </li>
                <li className=""> 
                   <Link className="text-gray-600 font-semibold hover:text-white  text-sm" href="/faq" >F&amp;Qs</Link>
                </li>
              </ul>
              <ul className="lg:col-span-2 md:col-span-1 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <h6 className="w-[100px]  border-b border-b-[#8900a1]  mb-2  py-2"> Contact Us</h6>
                <li className="pt-2 flex flex-row hover:text-white  "> 
                  <Link className="hover:text-white flex flex-row items-center " href="tel:20 999 999 9999"> <IconPhone className="text-gray-600 w-5  text-sm mr-2" /><span className="text-gray-600  text-sm  font-semibold hover:text-white ">+20 999 999 9999</span></Link>
                </li>
                <li className="pt-2 flex flex-row hover:text-white  "> 
                <Link className="hover:text-white flex flex-row items-center "  href="mailto:info@stayexpo.com"> <IconMail className="text-gray-600  w-5 text-sm mr-2 " /><span className="text-gray-600  text-sm  font-semibold hover:text-white "> info@stayexpo.com</span></Link> 
                </li>
                <li className="pt-2 flex flex-row hover:text-white  "> 
                  <Link className="hover:text-white flex flex-row items-center "  href="http://maps.google.com/?q=1200"> <IconLocation className="text-gray-600  w-5 text-sm mr-2 " /><span className="text-gray-600  text-sm  font-semibold hover:text-white ">Cairo,Egypt</span></Link>
                </li>
                <li className="pt-2 flex flex-row hover:text-white  "> 
                  <Link className="hover:text-white flex flex-row items-center " href="tel:20 999 999 9999"> <IconPhone className="text-gray-600 w-5  text-sm mr-2" /><span className="text-gray-600  text-sm  font-semibold hover:text-white ">+20 999 999 9999</span></Link>
                </li>
              </ul>
              <ul className="lg:col-span-4 md:col-span-2 sm:col-span-1  lg:mt-5 lg:mb-5  ">
                <h6 className="w-[100px]  mb-3 border-b border-b-[#8900a1] py-2"> Subscription</h6>
                <li className="pt-2 flex flex-row  "> 
                  <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="w-2/3 px-2 py-2 bg-transparent border-gray-400 border border-r-0 rounded-r-none rounded-l-g"
                    />
                    <button className="px-2 py-2 hover:text-bg_banfsgy hover:bg-transparent hover:border-gray-400 hover:border rounded-lg rounded-l-none  bg-bg_banfsgy ">
                      Sign Up
                    </button>
                 </li>
              </ul>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1  gap-4 mt-5">

              <ul className="lg:col-span-1 md:col-span-1 sm:col-span-1 mt-5 ">
                <li className="text-gray-600 py-3"> 
                   <Image className="lg:w-[100%] w-[50%] lg:pr-2  h-auto" src={img2.src} alt="img"  width="10" height="10"/>
                </li>
              </ul>
           
              <ul className="lg:col-span-8 md:col-span-2 sm:col-span-1  lg:mt-5 lg:mb-5  ">
                
                <li className="pt-2 "> 
                     <div className=" border border-gray-600 p-5  rounded-lg ">
                     <fieldset>
                        <legend>DISCLAIMER</legend>
                       <p className="text-gray-600 test-xsm  font-semibold ">StayExpo is an independent and privately owned tour operator.
                        Any names or logos of hotel properties, events or venues may
                        be registered trademarks of their respective holders. Our use
                        of these trademarks does not imply any affiliation with, or
                        endorsement by their owners unless otherwise specified on the
                        relevant webpage.
                        </p>  
                      </fieldset>
                        {/* <div className="absolute -top-3 z-1 left-5 ">
                          <span className="text-gray-600 test-sm font-semibold  bg-slate-900 p-3" >DISCLAIMER</span>
                        </div> */}
                      </div>
                </li>
                
              </ul>
              <ul className="lg:col-span-3 md:col-span-2 sm:col-span-1 lg:mt-5 lg:mb-5 ">
      
                <li className="pt-5 flex flex-row hover:text-white  "> 
                  <Image src={img.src} className="w-[100%] h-auto"   alt="img" width="10" height="10" />
                </li>
                
              </ul>
         
            </div>
            

            
          </div>
        </main>
         
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center  p-2">
                 
              <p className=" p-1 text-gray-600">
                StayExpo ® is a registered trademark of 360StayExpo Group ®
              </p>      
           
              <p className=" p-1 text-gray-600">
               2016 - 2023 StayExpo®. All rights reserved. powered by SavvyHost
              </p>     
        </div>
      </footer>
    </>
  )
}

export default Footer;
