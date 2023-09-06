"use client";
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomNavigatonDetails from "../component/mucles/CustomNavigatonDetails";
import ImageSlider from "../component/mucles/ImageSlider";
import CustomTabs from "../component/mucles/CustomTabs";
import DetailsRoom from "../component/mucles/DetailsRoom";
import LoacationSite from "../component/Search/LoacationSite";
import BreadCrumbs from "../component/atoms/BreadCrumbs";
import { Link, animateScroll as scroll } from "react-scroll";

const images = [
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },
  { full_path: "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768" },

  // Add more image objects as needed
];


export default function Page() {
  const [isLoading] = useState(false);

  const [activeSection,setActiveSection]=useState<any>()
  const [windowHeight,setWindowHeight]=useState<any>()

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.scrollY)

    }

    window.addEventListener('scroll', handleResize); // ideally you need to throttle this event

    // fire on first render if needed
    handleResize();

    // cleanup this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
},[]);
 

console.log(activeSection,'hi')
  return (
    <>
    <CustomNavigatonDetails/>
    <div className=" md:m-auto lg:px-20  ">
      <div className="hidden md:block">
        <div className="grid grid-cols-5">
          <div className="col-span-5 pt-2 pb-3">
             <div className="flex flex-row justify-between items-center">
                <BreadCrumbs />
                <div>
                    <p className=" text-bg_banfsgy text-xs hover:underline">See all 2,211 properties in Cairo</p> 
                </div>
              </div>
          </div>
          <div className="col-span-2">
            {isLoading ? (
              <Skeleton height={310} radius="md" animate={false} />
            ) : (
              <Image
                className="w-full h-[312px] rounded"
                src="https://pix8.agoda.net/hotelImages/60410/-1/2e5457f6c6dd74c42e88ed55475c4b63.jpg?ca=29&ce=0&s=1024x768"
                alt=""
                width="100"
                height="250"
              />
            )}
          </div>
          <div className="grid grid-cols-3 col-span-3 ">
            <div className="col-span-1">
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
            </div>
            <div className="col-span-1">
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
            </div>
            <div className="col-span-1">
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <div className="p-1">
                {isLoading ? (
                  <Skeleton height={150} radius="md" animate={false} />
                ) : (
                  <Image
                    className="w-full h-[150px] rounded"
                    src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                    alt=""
                    width="100"
                    height="100"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <ImageSlider media={images}/>
        
      </div>
      <div className="pb-5">
      <CustomTabs />
      <DetailsRoom />
      <DetailsRoom />
      <DetailsRoom />
      <DetailsRoom />
      </div>
      {/* <LoacationSite /> */}
      {windowHeight < 2394  ?
      <div className="md:hidden flex max-sm:flex px-2 justify-between items-center sticky bottom-0 w-[100%] py-3 bg-violet-100 button-select-room">
         <div className="flex flex-col">
            <del className="text-sm font-semibold">USD 100 </del>
            <p className="text-sm font-semibold">USD <strong className="text-3xl ">88</strong></p>
         </div>
         <Link duration={1200} onSetActive={setActiveSection} spy={true} smooth={true} activeClass="active" to="Rooms" className="py-2 px-5 bg-bg_banfsgy text-white rounded-md  text-center">Select Room</Link>
      </div>
      :
      null
      }
       
    </div>
   
    </>
  );
}
