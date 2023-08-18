"use client";
import { Button, Tabs } from "@mantine/core";
import { IconPhone, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import imgCustomer from "../../../public/assets/discount.jpg";
import FilterCustom from "../Search/FilterCustom";
import CheckboxComp from "../atoms/CheckBox";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import Rating from "../atoms/Rating";
import SelectForm from "../atoms/SelectForm";
import FilterIcon from "../icons/FilterIcon";
import MapIcon from "../icons/MapIcon";
import SearchIcon from "../icons/SearchIcon";
import ModalComp from "../template/Modal";
import SerachComponent from "./SerachComponent";
import SideBar from "../template/SideBar";
import FilterSearch from "../template/FilterSearch";

export default function CustomNavigatonDetails() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-[#f4f6f8]">
      <div className="hidden  container gap-3 grid-cols-10 m-auto lg:grid lg:px-10  lg:py-4" >
        <div className="col-span-3 py-1 ">
          <SelectForm />
        </div>
        <div className="col-span-3  py-1">
          <DateInputComp placeholder="12/2/2022" />
        </div>
        <div className="col-span-3  py-1">
          <DropDown />
        </div>
        <div className="col-span-1  py-2 ">
          <Button className="py-1 px-[5px] text-base rounded-xl  font-semibold text-white  hover:bg-violet-600 bg-bg_banfsgy ">
            Update Search
          </Button>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-between bg-bg_banfsgy lg:hidden">
        <Button
          onClick={() => setOpen(true)}
          className="h-auto mr-auto w-[50%] max-sm:w-[60%] p-3 m-2 rounded-xl text-white bg-[#c6badf2b] focus:bg-bg_banfsgy "
          leftIcon={
            <>
          <SearchIcon />
          <div className="flex flex-col ml-2 ">
            <p className=" text-lg">Miami, FL</p>
            <h3>Tue, Jul 18 – Thu, Jul 27 ....</h3>
          </div>
          </>
        }
        >
          
        </Button>
        <div>
          <button className="p-3 hover:bg-[#c6badf2b]  rounded-xl" onClick={() => setOpenMap(true)}>
            <div className="flex flex-col items-center justify-center ">
              <MapIcon />
              <p className="text-white ">Map</p>
            </div>
          </button>

          <button className="p-3 hover:bg-[#c6badf2b] ml-3  rounded-xl" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-col items-center justify-center ">
              <FilterIcon />
              <p className="text-white ">Filter</p>
            </div>
          </button>
        </div>
      </div>
      <SideBar widthSm={true} closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
         <FilterSearch />
      </SideBar>

      <ModalComp
        opened={open}
        isClose={() => setOpen(false)}
        title="Edit Search"
      >
      <SerachComponent/>

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
