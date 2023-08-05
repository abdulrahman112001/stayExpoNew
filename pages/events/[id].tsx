"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import AccordionComp from "../component/accordion/Accordion";
import Button from "../component/atoms/Button";


export default function Events() {
  return (
    <div>
      <div className="relative ">
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
      <div className="grid grid-cols-12">
        <div className="col-span-12 p-2 md:col-span-3">
          <div className="p-10 shadow rounded-xl">
            <div>
              <AccordionComp />
            </div>
          </div>
        </div>
        <div className="col-span-12 p-2 md:col-span-6">
          <div className="grid grid-cols-12 p-2 mt-2 align-middle border-b-2">
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
                <Link href="/events/[id]" as="/events/123">
                  
                  gamescom 2023 </Link>
                  <span className="bg-[#f30] px-1 rounded text-white">
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
                <Button className="bg-[#f30] text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-2 mt-2 align-middle border-b-2">
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
                  <span className="bg-[#f30] px-1 rounded text-white">
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
                <Button className="bg-[#f30] text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-2 mt-2 align-middle border-b-2">
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
                  <span className="bg-[#f30] px-1 rounded text-white">
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
                <Button className="bg-[#f30] text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-2 mt-2 align-middle border-b-2">
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
                  <span className="bg-[#f30] px-1 rounded text-white">
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
                <Button className="bg-[#f30] text-white p-2 px-3 rounded-2xl">
                  Book Now
                </Button>
                <Button className="p-2 px-3 mt-3 text-black bg-white border rounded-2xl">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 p-2 md:col-span-3">
          <div className="flex flex-col justify-center p-10 align-middle shadow ali rounded-xl">
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
  );
}
