"use client";
import React, { useRef, useEffect } from "react";
import { Button, Tabs } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import imgCustomer from "../../../public/assets/discount.jpg";
import FilterCustom from "../Search/FilterCustom";
import SelectForm from "../atoms/SelectForm";
import CheckboxComp from "../atoms/CheckBox";
import Rating from "../atoms/Rating";
import ModalComp from "../template/Modal";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import SearchIcon from "../icons/SearchIcon";
import MapIcon from "../icons/MapIcon";
import FilterIcon from "../icons/FilterIcon";

export default function CustomNavigatonDetails() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const itemGridRef = useRef(null);


  return (
    <div className="bg-[#f4f6f8]">
      <div className="hidden grid-cols-4 m-auto md:grid md:p-2" >
        <div className="col-span-1 p-3">
          <SelectForm />
        </div>
        <div className="col-span-1 p-3">
          <DateInputComp placeholder="12/2/2022" />
        </div>
        <div className="col-span-1 p-3">
          <DropDown />
        </div>
        <div className="col-span-1 p-3">
          <Button className="p-1 px-4 w-[100%] bg-bg_banfsgy text-white">
            Update Search
          </Button>
        </div>
      </div>
      <div className="flex justify-between bg-bg_banfsgy md:hidden">
        <Button
          onClick={() => setOpen(true)}
          className="h-auto p-3 m-2 rounded-xl text-white bg-[#c6badf2b]"
          leftIcon={<SearchIcon />}
        >
          <div className="flex flex-col ">
            <p>Miami, FL</p>
            <h3>Tue, Jul 18 – Thu, Jul 27 ....</h3>
          </div>
        </Button>
        <button className="p-3" onClick={() => setOpenMap(true)}>
          <div className="flex flex-col items-center justify-center ">
            <MapIcon />
            <p className="text-white ">Map</p>
          </div>
        </button>

        <button className="p-3" onClick={() => setOpenFilter(true)}>
          <div className="flex flex-col items-center justify-center ">
            <FilterIcon />
            <p className="text-white ">Filter</p>
          </div>
        </button>
      </div>
      <FilterCustom isOpen={openFilter} isClosed={() => setOpenFilter(false)}>
        <div className="col-span-3 ">
          <div className="mt-5">
            <p>Sort By</p>
            <SelectForm />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Deals</h3>
            <CheckboxComp
              className="mt-3"
              label="Retail - you pick the hotel"
            />
            <CheckboxComp
              className="mt-3"
              label="Express Deals & Pricebreakers"
            />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Your Budget</h3>
            <div className="flex items-center justify-between mt-3">
              <CheckboxComp label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <CheckboxComp label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <CheckboxComp label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Rate Options</h3>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label=" Free Cancellation" />
              <p className="text-gray-500">(22)</p>
            </div>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="Pay Later " />
              <p className="text-gray-500">(31)</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Hotel Star Level </h3>
            <div>
              <Rating>
                <Tabs.List>
                  <Tabs.Tab
                    value="five"
                    // icon={<IconSettings size="1rem" />}
                  >
                    5+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="six"
                    // icon={<IconMessageCircle size="1rem" />}
                  >
                    6+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="seven"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    7+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="eight"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    8+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="night"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    9+
                  </Tabs.Tab>
                </Tabs.List>
              </Rating>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Property Type </h3>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="Hotels " />
              <p className="text-gray-500">(9)</p>
            </div>
          </div>
          <div className="mt-5 border border-[#5d22d5] rounded-xl p-3">
            <h4>Best Price Guaranteed</h4>
            <h4>Exclusively for Priceline members</h4>

            <p>
              Book now and well refund the difference if you find a lower price
            </p>
          </div>

          <div className="mt-5">
            <div className="p-4 m-auto text-center border rounded-xl">
              <Image className="m-auto" src={imgCustomer} alt="customer" />
              <h3 className="mt-3">Special discounts when you call</h3>
              <p className="mt-3">
                1 in 4 people saved 20% or more over the phone.
              </p>
              <p className="">
                <span className="font-bold">StayExpo®</span> PHONE DEALS
              </p>
              <p className="flex justify-center ">
                <span className="mt-3">
                  <IconPhone />
                </span>
                <a href="">+20 122 108 3507</a>
              </p>
            </div>
          </div>
        </div>
      </FilterCustom>

      <ModalComp
        opened={open}
        isClose={() => setOpen(false)}
        title="Edit Search"
      >
        <div className="grid grid-cols-4">
          <div className="col-span-4 p-3">
            <SelectForm />
          </div>
          <div className="col-span-4 p-3">
            <DateInputComp placeholder="12/2/2022" />
          </div>
          <div className="col-span-4 p-3">
            <DropDown />
          </div>
          <div className="col-span-4 p-3">
            <Button className="p-1 px-4 w-[100%] bg-bg_banfsgy">
              Update Search
            </Button>
          </div>
        </div>
      </ModalComp>

      <ModalComp
        opened={openMap}
        isClose={() => setOpenMap(false)}
        title="Map"
        fullScreen={true}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
          allowFullScreen
          loading="lazy"
          className="w-full h-screen rounded-xl"
        ></iframe>
      </ModalComp>
    </div>
  );
}
