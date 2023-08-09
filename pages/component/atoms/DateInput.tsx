"use client";
import { useState } from "react";
import { DatePickerInput  , DatePicker} from "@mantine/dates";
function DateInputComp({ placeholder, mobile }: any) {
  
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
   console.log(value,"date")
  return (
    <div>
      {mobile ? (
        <>
        <DatePicker
          type="range"
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          mx="auto"
          maw={400}
          numberOfColumns={12}
          weekendDays={[]}
          //@ts-ignore
          // withSelectButtons
        />
        <div className="py-2 px-2  sticky bottom-0 bg-white">
           <button className="w-[100%] bg-bg_banfsgy py-2 rounded-lg text-lg text-white font-semibold ">OK</button>
        </div>
        </>
      ) : (
        <DatePickerInput
          type="range"
          // label="Pick dates range"
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          mx="auto"
          maw={400}
          weekendDays={[]}
          numberOfColumns={1}
          clearable
          className="bg-white"
        />
      )}
    </div>
  );
}

export default DateInputComp;
