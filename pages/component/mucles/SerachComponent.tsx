"use client";
import React, { useState } from "react";
import SelectForm from "../atoms/SelectForm";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import Button from "../atoms/Button";
import Link from "next/link";
import { Input } from "@mantine/core";
import ModalComp from "../template/Modal";

export default function SerachComponent() {
  const [openDestniation, setOpenDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);

  return (
    <>
      <div>
        <div className="w-[100%] md:w-[60%] mt-10 md:ml-auto hidden  md:block">
          <div className="p-3 shadow-2xl rounded-xl">
            <SelectForm />
            <div className="grid grid-cols-2 mt-4">
              <div className="col-span-2">
                <DateInputComp placeholder="Check-in - Check-out " />
              </div>
            </div>
            <div className="mt-4">
              <DropDown />
            </div>
            <Button variant="primary" className="p-2 px-4 w-[100%] mt-5">
              <Link href="/search">Explore Hotels</Link>
            </Button>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] mt-10 md:ml-auto block md:hidden ">
          <div className="p-3 shadow-2xl rounded-xl">
            <Input
              component="button"
              className="!p-0 text-[#adb5bd]"
              onClick={() => setOpenDestination(true)}
            >
              Destination
            </Input>

            <div className="grid grid-cols-2 mt-4">
              <div className="col-span-2">
                <Input
                  component="button"
                  className="p-0 text-[#adb5bd]"
                  onClick={() => setOpenDate(true)}
                >
                  Check-in - Check-out
                </Input>
              </div>
            </div>
            <Input
              component="button"
              className="p-0 mt-5"
              onClick={() => setOpenGuest(true)}
            >
              0 guesets
            </Input>
            <Button variant="primary" className="p-2 px-4 w-[100%] mt-5">
              <Link href="/search">Explore Hotels</Link>
            </Button>
          </div>
        </div>
      </div>
      <ModalComp
        opened={openDestniation}
        isClose={() => setOpenDestination(false)}
        title="Map"
        fullScreen={true}
      >
       
        <SelectForm />
      </ModalComp>
      <ModalComp
        opened={openDate}
        isClose={() => setOpenDate(false)}
        title="Map"
        fullScreen={true}
      >
        <DateInputComp placeholder="Check-in - Check-out " mobile={true} />
        {/* <CoustomDatePickerMobile/> */}
      </ModalComp>
      <ModalComp
        opened={openGuest}
        isClose={() => setOpenGuest(false)}
        title="Map"
        fullScreen={true}
      >
        <DropDown />
      </ModalComp>
    </>
  );
}
