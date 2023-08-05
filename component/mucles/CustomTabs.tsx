"use client";
import { Carousel } from "@mantine/carousel";
import {
  IconAwardFilled,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconFileCertificate,
  IconFilter,
  IconFlag,
  IconMan,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import imgCompany from "../../public/assets/agoda_preferred_logo.png";
const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = () => {
    // scroll.scrollTo("content", {
    //   // smooth: true as boolean ,


    // });
  };

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between p-3 border ">
        <ul className="hidden gap-10 md:flex">
          <li>
            <Link
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Overview</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="content2"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Rooms</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Facilities</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Reviews</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Location</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              // offset={-50}
              // duration={500}
            >
              <button onClick={handleTabClick}>Policies</button>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <small>from</small>
          <span className="text-lg text-red-600">$ 72</span>
          <button className="p-1 text-white rounded bg-bg_banfsgy">
            VIEW THIS DEAL
          </button>
        </div>
      </div>

      <div id="content">
        <div className="grid grid-cols-6 mt-4">
          <div className="col-span-6 md:col-span-4">
            <div className="p-4 border rounded-sm">
              <div className="border-b">
                <div>
                  <div>
                    <Image
                      alt="img company"
                      src={imgCompany}
                      width="100"
                      height="100"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <h1 className="font-bold">LIHO Hotel Tainan</h1>
                    <div className="flex gap-1">
                      <IconStar className="text-yellow-500 fill-yellow-500" />
                      <IconStar className="text-yellow-500 fill-yellow-500" />
                      <IconStar className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <p className="text-gray-600">
                    8F, No 145, Sec 2, Zhongyi Rd., Tainan City, Tainan, Taiwan,
                    700 - SEE MAP
                  </p>
                </div>
              </div>

              <div>
                <p className="py-2 text-gray-600">
                  Get your trip off to a great start with a stay at this
                  property, which offers free Wi-Fi in all rooms. Strategically
                  situated in Tainan City, allowing you access and proximity to
                  local attractions and sights. Dont leave before paying a visit
                  to the famous Chimei Museum. This 3-star property features hot
                  tub to make your stay more indulgent and memorable
                </p>
              </div>
            </div>
            <div className="p-4 mt-3 border rounded-sm">
              <h1 className="text-bold">Highlights</h1>
              <div className="grid grid-cols-5 mt-3 ">
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="safety"
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      width="32"
                      height="32"
                    />
                    <p>Hygiene Plus</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="safety"
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      width="32"
                      height="32"
                    />
                    <p>Hygiene Plus</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="safety"
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      width="32"
                      height="32"
                    />
                    <p>Hygiene Plus</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="safety"
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      width="32"
                      height="32"
                    />
                    <p>Hygiene Plus</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="safety"
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      width="32"
                      height="32"
                    />
                    <p>Hygiene Plus</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-4 mt-3 border rounded-sm">
                <h1 className="text-bold">Facilities</h1>

                <div className="grid grid-cols-4">
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1">
                      <IconCheck />
                      <p>Car park</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 runded-sm">
              <div className="p-4 bg-red-100 runded-sm">
                <h1 className="font-bold text-red-800">
                  This property is in high demand!
                </h1>
                <p>51 travelers have booked today.</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 px-3 md:col-span-2">
            <div className="p-4 border rounded-sm">
              <div>
                <h1 className="font-bold"> 7.7 Very good </h1>
                <p>12,161 reviews</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-4">
                <p className="p-2 border rounded-lg">Housekeeping</p>
                <p className="p-2 border rounded-lg">Housekeeping</p>
                <p className="p-2 border rounded-lg">Housekeeping</p>
              </div>
              <div className="mt-4">
                <Carousel
                  slideSize="70%"
                  height={200}
                  align="start"
                  slideGap="md"
                  withIndicators
                >
                  <Carousel.Slide>
                    <div className="border border-gray-700 rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-xl">
                        <p>Everything in the room was neat and decent</p>
                      </div>
                      <div className="flex gap-1 p-4">
                        <IconFlag />
                        Kuan
                      </div>
                    </div>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <div className="border border-gray-700 rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-xl">
                        <p>Everything in the room was neat and decent</p>
                      </div>
                      <div className="flex gap-1 p-4">
                        <IconFlag />
                        Kuan
                      </div>
                    </div>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <div className="border border-gray-700 rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-xl">
                        <p>Everything in the room was neat and decent</p>
                      </div>
                      <div className="flex gap-1 p-4">
                        <IconFlag />
                        Kuan
                      </div>
                    </div>
                  </Carousel.Slide>
                </Carousel>
              </div>
            </div>
            <div className="p-4 mt-4 border rounded-sm">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
                  height="150"
                  allowFullScreen
                  loading="lazy"
                  className="w-full rounded-xl"
                ></iframe>
                <h2>8.2 Excellent</h2>
                <p className="text-gray-400">Location rating score</p>
                <div>
                  <div className="flex items-center mt-4 items">
                    <IconFileCertificate />
                    <p className="text-sm">
                      Excellent location - Inside city center
                    </p>
                  </div>
                  <div className="flex items-center mt-4 items">
                    <IconBuilding />
                    <p className="text-sm">Popular neighborhood</p>
                  </div>
                  <div className="flex items-center mt-4 items">
                    <IconMan />
                    <p className="text-sm">Popular neighborhood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content2 ">
        <div className="flex justify-between p-3 mt-5 border-b">
          <h1 className="font-bold">Select your room</h1>

          <div className="flex gap-1">
            <IconAwardFilled />
            <h3 className="text-blue-500">We price match!</h3>
          </div>
        </div>
        <div className="p-4 mt-4 border rounded-sm">
          <div className="flex gap-1">
            <IconFilter />
            <h3 className="font-bold">Filter room options by:</h3>
          </div>
          <p>
            Tip: Your travel dates are a while from now. Try a deal with Free
            cancellation to stay flexible in case plans change.
          </p>
          <div className="grid grid-cols-6 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-center gap-2 p-0 m-2 text-center border rounded-lg md:p-3 flex-md:flex-row">
                <IconCalendar />
                <small>Pay later option (4)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTabs;
