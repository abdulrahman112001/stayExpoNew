"use client";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { DatePickerInput } from "@mantine/dates";
function DateInputComp({ placeholder, mobile }: any) {
  
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div>
      {mobile ? (
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
          withSelectButtons
        />
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
