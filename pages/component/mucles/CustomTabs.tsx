"use client";
import { Carousel } from "@mantine/carousel";
import {
  IconBeach,
  IconBuilding,
  IconBuildingBank,
  IconBuildingCastle,
  IconBuildingMosque,
  IconBuildingStore,
  IconCheck,
  IconCoffee,
  IconCoins,
  IconFileCertificate,
  IconFlag,
  IconPinnedFilled,
  IconSmokingNo,
  IconStar,
  IconThumbUp,
  IconThumbUpFilled,
  IconUserCancel,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import imgCompany from "../../../public/assets/agoda_preferred_logo.png";
import { IconLocation } from "@tabler/icons-react";
import { IconChevronLeft } from "@tabler/icons-react";
import hygiene from "./../../../public/assets/hygiene.svg"
import bus from "./../../../public/assets/bus.svg"
import checkin from "./../../../public/assets/checkin.svg"
import car from "./../../../public/assets/car.svg"
import breakfast from "./../../../public/assets/breakfast.svg"
import { IconAward } from "@tabler/icons-react";
import FilterIcon from "../icons/FilterIcon";
import { IconCalendarTime } from "@tabler/icons-react";
import KingBedIcon from "../icons/KindBedIcon";
import TwinBedIcon from "../icons/TwinBedIcon";
import { IconSeeding } from "@tabler/icons-react";
import { IconPool } from "@tabler/icons-react";
const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = () => {
    // scroll.scrollTo("content", {
    //   // smooth: true as boolean ,
    // });
  };


  return (

    
    <div className="mt-3">
      <div className="flex flex-row items-center justify-between p-3 border rounded ">
        <ul className="hidden gap-10 md:flex ">
          <li>
            <Link
              activeClass="active"
              to="Overview"
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
              to="Rooms"
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
              className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
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
          <small className="text-xs text-gray-600">from</small>
          <span className="text-lg text-red-600">$ 72</span>
          <button className="p-1 text-white text-sm font-medium rounded bg-bg_banfsgy">
            Select Room
          </button>
        </div>
      </div>

      <div id="Overview">
        <div className="grid grid-cols-6 mt-4">
          <div className="col-span-6 md:col-span-4 rounded">
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
                    <h1 className="font-bold text-xl">LIHO Hotel Tainan</h1>
                    <div className="flex gap-1">
                      <IconStar className="text-yellow-400 fill-yellow-400" />
                      <IconStar className="text-yellow-400 fill-yellow-400" />
                      <IconStar className="text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="py-2 flex flex-row cursor-pointer">
                  <p className="text-gray-600 text-sm hover:underline max-sm:w-[75%] ">
                    12 Ahmed Ragheb, Downtown, Cairo, Egypt, 11519 -
                  </p> 
                    <span className=" text-bg_banfsgy text-sm  flex flex-row items-center">
                      <IconLocation
                        className="ml-2 mr-1 text-xs fill-[#5d22d5] text-[#5d22d5]"
                        width="12px"
                        height="12px"
                      />
                      See Map
                    </span>
                 
                </div>
              </div>

              <div>
                <p className="py-2 text-gray-600 text-sm">
                  Get your trip off to a great start with a stay at this
                  property, which offers free Wi-Fi in all rooms. Conveniently
                  situated in the Downtown part of Cairo, this property puts you
                  close to attractions and interesting dining options. Don't
                  leave before paying a visit to the famous The Museum of
                  Egyptian Antiquities. Rated with 5 stars, this high-quality
                  property provides guests with access to massage, restaurant
                  and hot tub on-site.
                </p>
              </div>
            </div>
            <div className="p-4 mt-3 border rounded-sm">
              <h1 className=" font-semibold text-lg">Highlights</h1>
              <div className="grid md:grid-cols-5 grid-col-1 mt-3 ">
                <div className="col-span-1">
                  <div className="flex md:flex-col flex-row items-center md:justify-center py-1">
                    <Image
                      alt="safety"
                      src={hygiene.src}
                      width="32"
                      height="32"
                      className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:mr-0 mr-2"
                    />
                    <p className="text-xs font-semibold">Hygiene Plus</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex md:flex-col flex-row  items-center md:justify-center py-1 ">
                    <Image
                      alt="safety"
                      src={bus.src}
                      width="32"
                      height="32"
                      className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:mr-0 mr-2"
                    />
                    <p className="text-xs font-semibold">transportation </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex md:flex-col flex-row  items-center md:justify-center py-1">
                    <Image
                      alt="safety"
                      src={checkin.src}
                      width="32"
                      height="32"
                      className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]  md:mr-0 mr-2"
                    />
                    <p className="text-xs  font-semibold">Check-in [24-hour]</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex md:flex-col flex-row  items-center md:justify-center py-1">
                    <Image
                      alt="safety"
                      src={car.src}
                      width="32"
                      height="32"
                      className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]  md:mr-0 mr-2"
                    />
                    <p className="text-xs  font-semibold">Airport transfer </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex md:flex-col flex-row  items-center md:justify-center py-1">
                    <Image
                      alt="safety"
                      src={breakfast.src}
                      width="32"
                      height="32"
                      className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]  md:mr-0 mr-2"
                    />
                    <p className="text-xs  font-semibold">Excellent breakfast </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-4 mt-3 border rounded-sm">
                <h1 className="font-semibold text-lg py-2">Facilities</h1>

                <div className="grid md:grid-cols-4 grid-cols-2">
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Car park</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Valet parking</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Free Wi-Fi in all rooms!</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Front desk [24-hour]</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Spa</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Swimming pool [outdoor]</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Luggage storage</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1 py-1">
                      <IconCheck className="h-[20px] w-[20px]" />
                      <p className="text-xs font-semibold text-gray-800 truncate">Cash withdrawal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 runded-sm">
              <div className="p-4 md:pl-10 bg-red-100 runded-sm">
                <h1 className="font-bold text-[#e12d2d]">
                  This property is in high demand!
                </h1>
                <p>51 travelers have booked today.</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 px-3 md:col-span-2 rounded">
            <div className="p-4 border rounded-sm">
              <div>
                <h1 className="font-bold text-xl"> 7.7 Very good </h1>
                <p className="text-sm  text-bg_banfsgy">12,161 reviews</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-4">
                <p className="p-2 border  text-xs rounded-lg ">Housekeeping <span className="text-[#05ac05] inline-flex items-center  px-1"> 18 <IconThumbUpFilled className=" ml-1 w-[20px] h-[20px] fill-[#05ac05] text-[#05ac05]" /> </span></p>
                <p className="p-2 border  text-xs rounded-lg ">Breakfast <span className="text-[#05ac05] inline-flex items-center   px-1"> 11 <IconThumbUpFilled className=" ml-1 w-[20px] h-[20px] fill-[#05ac05] text-[#05ac05]" /> </span></p>
                <p className="p-2 border  text-xs rounded-lg ">View <span className="text-[#05ac05] inline-flex items-center  px-1"> 10 <IconThumbUpFilled className=" ml-1 w-[20px] h-[20px] fill-[#05ac05] text-[#05ac05]" /> </span></p>
              </div>
              <div className="mt-4 carousel-review">
                <Carousel
                 
                  slideSize="70%"
                  height={160}
                  align="start"
                  slideGap="sm"
                  withIndicators
                >
                  <Carousel.Slide>
                    <div className="border border-gray-200   rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-t-xl">
                        <p className="text-xs"><q>Everything in the room was neat and decent</q> </p>
                      </div>
                      <div className="flex gap-1 pb-10 pt-2 px-2 text-xs">
                        <IconFlag className="w-[20px] h-[20px]" />
                        Kuan
                      </div>
                    </div>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <div className="border border-gray-200   rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-t-xl">
                        <p className="text-xs"><q>Everything in the room was neat and decent</q> </p>
                      </div>
                      <div className="flex gap-1 pb-10 pt-2 px-2 text-xs">
                        <IconFlag className="w-[20px] h-[20px]" />
                        Kuan
                      </div>
                    </div>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <div className="border border-gray-200   rounded-xl">
                      <div className="bg-[#f8f7f9] p-4  rounded-t-xl">
                        <p className="text-xs"><q>Everything in the room was neat and decent</q> </p>
                      </div>
                      <div className="flex gap-1 pb-10 pt-2 px-2 text-xs">
                        <IconFlag className="w-[20px] h-[20px]" />
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
                <h6 className="text-base font-semibold py-1">8.2 Excellent</h6>
                <p className="text-gray-600 text-sm">Location rating score</p>
                <div>
                  <div className="flex items-center mt-4 items pb-5">
                    <IconFileCertificate />
                    <p className="text-sm ml-1">
                      <strong className="">Excellent location </strong>- Inside city center
                    </p>
                  </div>
                  <hr />
                  <div className="pb-1">
                    <p className=" font-semibold py-3 text-sm">Popular landmarks</p>
                    <div className="flex items-center py-1 items">
                      <IconBuilding className="w-[15px] h-[15px] mr-2" />
                      <p className="text-xs">The Museum of Egyptian </p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconBuildingCastle className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">Popular neighborhood</p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconBuildingMosque className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">Mosque of Muhammad Ali</p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconBeach className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">El Mandara Beach </p>
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className=" font-semibold py-3 text-sm">Closest landmarks</p>
                    <div className="flex items-center py-1 items">
                      <IconBuilding className="w-[15px] h-[15px] mr-2" />
                      <p className="text-xs">The Museum of Egyptian </p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconBuildingStore className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">LC Waikiki</p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconBuildingBank className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">El Ahly Bank</p>
                    </div>
                    <div className="flex items-center py-1 items">
                      <IconPinnedFilled className="w-[15px] h-[15px] mr-2"/>
                      <p className="text-xs">Market  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Rooms">
        <div className="flex justify-between p-3 mt-5 border-b">
          <h1 className=" font-semibold text-xl">Select your room</h1>

          <div className="flex gap-1">
            <IconAward />
            <h3 className=" text-bg_banfsgy font-medium text-sm">We price match!</h3>
          </div>
        </div>
        <div className="p-4 mt-4 border rounded-sm">
          <div className="flex gap-1">
            <FilterIcon black={true} />
            <p className="text-base font-semibold">Filter room options by:</p>
          </div>
          <p className="text-sm py-2">
            <span className="text-green-500"> Tip:</span>Your travel dates are a while from now. Try a deal with Free
            cancellation to stay flexible in case plans change.
          </p>
          <div className="grid grid-cols-6 md:block">
         
            <div className="col-span-3 md:inline-block  ">
              <div className="room-option flex flex-row items-center gap-1  my-2 mx-1 border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconSmokingNo className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px] " fontWeight={100}  />
                <small className="room-option_text text-sm max-sm:text-xs">Non-smoking (20)</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
            <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1  border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconCalendarTime  className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]" fontWeight={100}  />
                <small  className="room-option_text text-sm max-sm:text-xs">Pay later (4)</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1 border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconCoins  className="room-option_icon  w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  " fontWeight={100}  />
                <small className="room-option_text text-sm max-sm:text-xs">Pay at hotel (4)</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1  border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconUserCancel  className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  " />
                <small className="room-option_text text-sm max-sm:text-xs">Free Cancellation</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1  border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconCoffee  className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  "  />
                <small className="room-option_text text-sm max-sm:text-xs">Breakfast (9)</small>
              </div>
            </div>
           
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1 border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconSeeding  className="room-option_icon  w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  "  />
                <small className="room-option_text text-sm max-sm:text-xs">Garden view</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1  border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconPool  className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  "  />
                <small className="room-option_text text-sm max-sm:text-xs">Pool view (9)</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 p-0 my-2 mx-1  border rounded-3xl px-5 py-2  flex-md:flex-row">
                <IconThumbUp  className="room-option_icon w-[20px] h-[20px]  max-sm:w-[15px] max-sm:h-[15px]  "  />
                <small className="room-option_text text-sm max-sm:text-xs">Recommended(1)</small>
              </div>
            </div>
             <div className="col-span-3 md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 max-sm:gap-0 p-0 my-2 mx-1  border rounded-3xl px-5 py-1  flex-md:flex-row">
                <KingBedIcon  className="room-option_icon w-[35px] text-sm h-[26px]   max-sm:w-[25px] max-sm:h-[25px] max-sm:mr-1 "  />
                <small className="room-option_text text-sm max-sm:text-xs ">King bed (4)</small>
              </div>
            </div>
            <div className="col-span-3  md:inline-block">
              <div className=" room-option flex flex-row items-center gap-1 max-sm:gap-0 p-0 my-2 mx-1  border rounded-3xl px-5 py-1 flex-md:flex-row">
                <TwinBedIcon  className="room-option_icon w-[30px] text-sm h-[25px]  max-sm:w-[25px] max-sm:h-[25px] max-sm:mr-1 "  />
                <small className="room-option_text text-sm max-sm:text-xs ">Twin Bed (4)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTabs;
