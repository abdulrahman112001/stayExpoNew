"use client";
import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AccordionComp from '../component/accordion/Accordion';
import MapIcon from '../component/icons/MapIcon';
import FilterIcon from '../component/icons/FilterIcon';
import SearchIcon from '../component/icons/SearchIcon';
import { IconArrowRight, IconArrowRightCircle, IconChevronLeft, IconLayoutSidebarRight } from '@tabler/icons-react';
import SideBar from '../component/template/SideBar';
import HeaderBanner from '../component/mucles/HeaderBanner';
import Header from "./../../public/assets/banner.png"
import { IconChevronRight } from '@tabler/icons-react';
export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <div className="flex justify-between sticky top-0  z-[1000] bg-bg_banfsgy md:hidden">
        <button className="inline-flex items-center ml-auto p-2 text-sm font-medium text-center text-white rounded-lg  bg-bg_banfsgy hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy" 
          onClick={() => setIsOpen(!isOpen)}
          >
            <div className=" flex ">
              <div className='m-auto  text-white'>
                 <IconLayoutSidebarRight />
               </div>
            </div>  
        </button>
   
      <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
      
             <AccordionComp padding={false}/>
             Trade fairs and conferences
      </SideBar>
      </div>
      <HeaderBanner
        label="Trade fairs and conferences"
        bannerImg={Header.src}
        descriptionBoolean={false}
        description="We are so grateful for you, our loyal clients and now you can be our judges! All our hard work to provide you with the best accommodations and travel services is paying off."
      />
      <div className="grid px-5 grid-cols-12 pt-5 gap-5 bg-gray-50 ">
        <div className="col-span-12 hidden lg:block  lg:col-span-3 relative z-[100]  translate-y-[-60px]  bg-white  shadow rounded-xl ">  
              <AccordionComp/>
        </div>
        <div className="col-span-12   lg:col-span-6 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl ">
          <div className="grid grid-cols-12 p-5   align-middle border-b  border-gray-200  ">
            <div className=' col-span-12'>
                <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center p-5'>
                  <div>
                    <h6 className=" font-light text-xl pb-3 ">We found <span>768</span> events</h6>
                  </div>
                  <div className=' inline-flex  items-center justify-between '>
                    <div className='mr-5'>
                     <span className=''>1 - 6 </span>of <span className=''> 758  </span>
                     </div>
                     <div>
                      <button className=' hover:bg-gray-100 hover:shadow rounded-full p-3'> <IconChevronLeft  className='text-gray-500 w-[20px] h-[20px]' /></button>
                      <button className='   hover:bg-gray-100 hover:shadow rounded-full p-3'><IconChevronRight className='text-gray-500 w-[20px] h-[20px]' /></button>
                     </div>
                  </div>
                </div>
                <hr />
            </div>
        
            <div className="lg:col-span-3 col-span-12  ">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
                className='lg:w-[100px] lg:h-[100px] w-[150px] h-[150px] m-auto '
              />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col ">
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                <Link className='text-2xl lg:text-lg ' href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-#f30][ lg:text-xs text-base px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                  <small className='lg:text-sm text-base'>Aug 23, 2023</small>
                  <small className='lg:text-sm text-base'>Aug 27, 2023</small>
                  <p className='lg:text-base text-lg'>Messe Cologne </p>
                  <p className='lg:text-sm text-sm text-gray-500'>Information technology</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 max-md:pt-5 md:pt-5">
            <div className="flex flex-col lg:p-0 max-sm:px-[50px] max-md:px-[100px] md:px-[100px]">
                <Button  className=" bg-bg_banfsgy  text-white hover:bg-white hover:text-bg_banfsgy border hover:border-bg_banfsgy  rounded-2xl">
                  Book Now
                </Button>
                <Button className=" mt-3 text-[#f30] hover:text-[#f30] hover:bg-white border-gray-300 bg-white border  rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-5  align-middle border-b  border-gray-200  ">
            <div className="lg:col-span-3 col-span-12  ">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
                className='lg:w-[100px] lg:h-[100px] w-[150px] h-[150px] m-auto '
              />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col ">
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                <Link className='text-2xl lg:text-lg ' href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-[#f30] lg:text-xs text-base px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                  <small className='lg:text-sm text-base'>Aug 23, 2023</small>
                  <small className='lg:text-sm text-base'>Aug 27, 2023</small>
                  <p className='lg:text-base text-lg'>Messe Cologne </p>
                  <p className='lg:text-sm text-sm text-gray-500'>Information technology</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 max-md:pt-5 md:pt-5">
            <div className="flex flex-col lg:p-0 max-sm:px-[50px] max-md:px-[100px] md:px-[100px]">
                <Button  className=" bg-bg_banfsgy  text-white hover:bg-white hover:text-bg_banfsgy border hover:border-bg_banfsgy  rounded-2xl">
                  Book Now
                </Button>
                <Button className=" mt-3 text-[#f30] hover:text-[#f30] hover:bg-white border-gray-300 bg-white border  rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-5  align-middle border-b  border-gray-200  ">
            <div className="lg:col-span-3 col-span-12  ">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
                className='lg:w-[100px] lg:h-[100px] w-[150px] h-[150px] m-auto '
              />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col ">
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                <Link className='text-2xl lg:text-lg ' href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-[#f30] lg:text-xs text-base px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                  <small className='lg:text-sm text-base'>Aug 23, 2023</small>
                  <small className='lg:text-sm text-base'>Aug 27, 2023</small>
                  <p className='lg:text-base text-lg'>Messe Cologne </p>
                  <p className='lg:text-sm text-sm text-gray-500'>Information technology</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 max-md:pt-5 md:pt-5">
            <div className="flex flex-col lg:p-0 max-sm:px-[50px] max-md:px-[100px] md:px-[100px]">
                <Button  className=" bg-bg_banfsgy  text-white hover:bg-white hover:text-bg_banfsgy border hover:border-bg_banfsgy  rounded-2xl">
                  Book Now
                </Button>
                <Button className=" mt-3 text-[#f30] hover:text-[#f30] hover:bg-white border-gray-300 bg-white border  rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
           <div className="grid grid-cols-12 p-5  align-middle border-b  border-gray-200  ">
            <div className="lg:col-span-3 col-span-12  ">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
                className='lg:w-[100px] lg:h-[100px] w-[150px] h-[150px] m-auto '
              />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col ">
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                <Link className='text-2xl lg:text-lg ' href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-[#f30] lg:text-xs text-base px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div className='max-md:m-auto md:m-auto lg:m-0 '>
                  <small className='lg:text-sm text-base'>Aug 23, 2023</small>
                  <small className='lg:text-sm text-base'>Aug 27, 2023</small>
                  <p className='lg:text-base text-lg'>Messe Cologne </p>
                  <p className='lg:text-sm text-sm text-gray-500'>Information technology</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 max-md:pt-5 md:pt-5">
            <div className="flex flex-col lg:p-0 max-sm:px-[50px] max-md:px-[100px] md:px-[100px]">
                <Button  className=" bg-bg_banfsgy  text-white hover:bg-white hover:text-bg_banfsgy border hover:border-bg_banfsgy  rounded-2xl">
                  Book Now
                </Button>
                <Button className=" mt-3 text-[#f30] hover:text-[#f30] hover:bg-white border-gray-300 bg-white border  rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  p-5 lg:col-span-3 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl">
          <div className="flex flex-col justify-center p-10 align-middle  ali rounded-xl">
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
