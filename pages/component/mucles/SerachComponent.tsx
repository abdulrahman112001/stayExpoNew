import React from "react";
import SelectForm from "../atoms/SelectForm";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import Button from "../atoms/Button";
import Link from "next/link";

export default function SerachComponent() {
  return (
    <div>
      <div className="w-[100%] md:w-[60%] mt-10 md:ml-auto ">
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
    </div>
  );
}
