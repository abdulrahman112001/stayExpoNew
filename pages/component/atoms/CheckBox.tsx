"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: string;
  className?: string;
  text?: string;
};

function CheckboxComp({ label, className, text }: CheckboxComp_TP) {
  return (
    <Checkbox
      label={
        <>
          <div className="flex justify-between align-middle">
            <p>{label}
            <span className="text-gray-500 ml-1 ">{text}</span>
            </p>
          </div>
        </>
      }
      className={`${className} w-full`}
    />
  );
}
export default CheckboxComp;
