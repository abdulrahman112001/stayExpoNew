"use client";
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import CustomNavigatonDetails from "../component/mucles/CustomNavigatonDetails";
import ImageSlider from "../component/mucles/ImageSlider";
import CustomTabs from "../component/mucles/CustomTabs";
import DetailsRoom from "../component/mucles/DetailsRoom";
import LoacationSite from "../component/Search/LoacationSite";

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
  



  return (
    <>
    <CustomNavigatonDetails/>
    <div className="md:pt-5 md:m-auto md:px-10">
      <div className="hidden md:block">
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            {isLoading ? (
              <Skeleton height={310} radius="md" animate={false} />
            ) : (
              <Image
                className="w-full h-[312px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
                    className="w-full h-[150px] rounded-sm"
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
      <CustomTabs />
      <DetailsRoom />
      <DetailsRoom />
      <DetailsRoom />
      <DetailsRoom />
      <LoacationSite />
    </div>
    </>
  );
}
