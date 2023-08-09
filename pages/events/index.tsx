"use client";
import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AccordionComp from '../component/accordion/Accordion';
import MapIcon from '../component/icons/MapIcon';
import FilterIcon from '../component/icons/FilterIcon';
import SearchIcon from '../component/icons/SearchIcon';
import { IconLayoutSidebarRight } from '@tabler/icons-react';
import SideBar from '../component/template/SideBar';

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <div className="flex justify-between bg-bg_banfsgy md:hidden">
        <button className="inline-flex items-center ml-auto p-2 text-sm font-medium text-center text-white rounded-lg  bg-bg_banfsgy hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy" 
          onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex ">
              <div className='m-auto'>
               <IconLayoutSidebarRight />
               </div>
            </div>  
        </button>
   
      <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
      
             <AccordionComp padding={false}/>
    
      </SideBar>
      </div>
      <div className=" ">
          
        <div>
          <Image
            className="!w-full brightness-50 h-[60vh]"
            alt="banner"
            width="500"
            height="500"
            src="https://ik.imagekit.io/etg/tr:w-1920,h-425/expobeds.com/skeleton/panorama-miami-florida-water.jpg"
          />
        </div>
        <div className="absolute top-1/2 left-[5%] md:left-[35%]">
          <h1 className="text-xl text-white md:text-4xl text-">
            Trade fairs and conferences
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 pt-5 gap-5 bg-gray-50 ">
        <div className="col-span-12 hidden lg:block  lg:col-span-3 relative z-[100]  translate-y-[-60px]  bg-white  shadow rounded-xl ">  
              <AccordionComp/>
        </div>
        <div className="col-span-12  lg:col-span-6 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl ">
          <div className="grid grid-cols-12 p-5  align-middle border-b-2  ">
            <div className="col-span-3 ">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col">
                <div>
                <Link href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-[#f30] text-xs px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div>
                  <small>Aug 23, 2023</small>
                  <small>Aug 27, 2023</small>
                  <p>Messe Cologne </p>
                  <p>Information technology</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col">
                <Button  className="bg-[#f30]  text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  p-5 mt-2 align-middle border-b-2">
            <div className="col-span-3">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col">
                <div>
                  <Link href=""> gamescom 2023 </Link>
                  <span className="bg-[#f30] text-xs px-1  rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div>
                  <small>Aug 23, 2023</small>
                  <small>Aug 27, 2023</small>
                  <p>Messe Cologne </p>
                  <p>Information technology</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col">
                <Button className="bg-[#f30]  text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  p-5 mt-2 align-middle border-b-2">
            <div className="col-span-3">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col">
                <div>
                  <Link href=""> gamescom 2023 </Link>
                  <span className="bg-[#f30] text-xs px-1 rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div>
                  <small>Aug 23, 2023</small>
                  <small>Aug 27, 2023</small>
                  <p>Messe Cologne </p>
                  <p>Information technology</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col">
                <Button className="bg-[#f30]  text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  p-5 mt-2 align-middle border-b-2 ">
            <div className="col-span-3">
              <Image
                src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                width="100"
                height="100"
                alt="company"
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col">
                <div>
                  <Link href=""> gamescom 2023 </Link>
                  <span className="bg-[#f30] text-xs px-1 rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div>
                  <small>Aug 23, 2023</small>
                  <small>Aug 27, 2023</small>
                  <p>Messe Cologne </p>
                  <p>Information technology</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col">
                <Button className="bg-[#f30]  text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  p-5 md:col-span-3 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl">
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
