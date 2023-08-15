"use client";
import { useEffect, useState } from "react";
import { DatePickerInput  , DatePicker} from "@mantine/dates";
import { Icon123, IconCalendar } from "@tabler/icons-react";
function DateInputComp({ placeholder, mobile }: any) {
  
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);
  const [range,setRange] = useState<number|null>(null)
   
  function getDayDiff(startDate: any, endDate: any) {
    const msInDay = 24 * 60 * 60 * 1000;
  
    setRange(Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay))
  }

  useEffect(()=>{
    if(date[0] && date[1]){
    getDayDiff(date[0],date[1])
    }
  },[date])
 
  
   console.log(Date,"date")
  return (
    <div>
      {mobile ? (
        <>
        <DatePicker
          type="range"
          placeholder={<><IconCalendar  className="w-[20px] h-[20px] text-bg_banfsgy" /> {placeholder}</>}
          value={date}
          onChange={setDate}
          mx="auto"
          maw={400}
          numberOfColumns={12}
          weekendDays={[]}
          //@ts-ignore
          // withSelectButtons
        />
        <div className="py-2 px-2  sticky bottom-0 bg-white">
           <button className="w-[100%] bg-bg_banfsgy py-2 rounded-lg text-lg text-white font-semibold "> {range?  `OK (${range})`: `OK(0)`} </button>
        </div>
        </>
      ) : (
        <DatePickerInput
          type="range"
          radius={"lg"}
          // label="Pick dates range"
          placeholder={<span className=" inline-flex items-center h-[100%]"><IconCalendar  className="w-[20px] h-[20px] text-bg_banfsgy mr-2" /> {placeholder}</span>}
          value={date}
          onChange={setDate}
          mx="auto"
          
          maw={400}
          weekendDays={[]}
          numberOfColumns={1}
          clearable
          className="bg-white rounded-2xl focus:border-bg_banfsgy "
        />
      )}
    </div>
  );
}

export default DateInputComp;
