"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: string;
  className?: string;
  text?: any;
};

function CheckboxComp({ label, className, text }: CheckboxComp_TP) {
  return (
    <Checkbox
      label={
        <>
          <div className=" flex  justify-between  ">
            <span className="  text-xs ml-2">{label}</span>
            <span className="text-gray-500  text-xs ">{text}</span>
            
          </div>
        </>
      }
      className={`${className} w-full text-sm hover:bg-[#5d22d529]  rounded p-2`}
    />
  );
}
export default CheckboxComp;
