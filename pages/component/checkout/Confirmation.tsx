import {
  IconBed,
  IconBedFilled,
  IconMail,
  IconMan,
  IconPencil,
  IconPrinter,
  IconSmoking,
  IconSmokingNo,
  IconSportBillard,
  IconStarFilled,
  IconWifi,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import TabsConfirmation from "./TabsConfirmation";
import DetailsPayment from "./DetailsPayment";

export default function Confirmation() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-bg_banfsgy">
            Your trip to New York in 42 days
          </h1>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end">
            <p className="flex items-center justify-center gap-2 p-2 mx-2 text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconPencil />
              <span>Manger</span>
            </p>
            <p className="flex items-center justify-center gap-2 p-2 mx-2 text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconMail />
              <span>Email</span>
            </p>
            <p className="flex items-center justify-center gap-2 p-2 mx-2 text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconPrinter />
              <span>Print</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-1/2 p-3 mt-5 border shadow-md rounded-xl">
          <div className="flex gap-2">
            <IconBedFilled />
            <h2 className="font-bold">
              intercontinental New Yourk Times Square
            </h2>
          </div>
          <p className="text-gray-500">
            Jul 31 - Aug 9 check-in:after 03:00 PM
          </p>

          <p className="text-gray-500">
            <span>confirmation</span>
            <span className="mx-2 bg-yellow-100">#:2666489478</span>
            <span className="mx-2 bg-yellow-100">#:2666489478</span>
            <span className="mx-2 bg-yellow-100">#:2666489478</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="p-3 mt-5 border shadow-md rounded-xl">
            <div className="flex gap-2">
              <div>
                <Image
                  className="!w-[120px] max-w-[120px] h-[120px] rounded-xl"
                  src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                  alt=""
                  width="300"
                  height="100"
                />
              </div>
              <div>
                <h2 className="font-bold">
                  interContinental New Yourk Times Square
                </h2>
                <p className="text-gray-500">Time Square - Theatre District</p>
                <div className="flex ">
                  <IconStarFilled className="w-[15px] text-gray-500" />
                  <IconStarFilled className="w-[15px] text-gray-500" />
                  <IconStarFilled className="w-[15px] text-gray-500" />
                  <IconStarFilled className="w-[15px] text-gray-500" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between pt-2 mt-4 border-t border-gray-400">
              <div className="flex gap-2">
                <h2 className="font-bold">check-in </h2>
                <p>Mon, July 31 after 3:00 pm*</p>
              </div>
              <div className="flex gap-2">
                <h2 className="font-bold">check-out </h2>
                <p>Mon, July 31 after 3:00 pm*</p>
              </div>
            </div>
            <div className="pt-2 mt-4 border-t border-gray-400">
              <p className="p-2 bg-yellow-100 rounded-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                quia consequatur voluptates nulla repelle.
              </p>
            </div>
            <div className="flex justify-between pt-2 mt-4 border-t border-gray-400">
              <div>
                <h3 className="font-bold">Address</h3>
                <p>300 W 44th street New York, NY 10036</p>
              </div>
              <div>
                <h3 className="font-bold">Top Amenities</h3>
                <div>
                  <p className="flex gap-2">
                    <IconWifi />
                    <span>Free WiFi</span>
                  </p>
                  <p className="flex gap-2">
                    <IconMan />
                    <span>Pet Friendly </span>
                  </p>
                  <p className="flex gap-2">
                    <IconSmokingNo />
                    <span>Pet Non-smoking Rooms / Facilites </span>
                  </p>
                  <p className="flex gap-2">
                    <IconSportBillard />
                    <span>Fitness Center </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <TabsConfirmation/>
            </div>
          </div>
        </div>
        <div className="col-span-4">

        <DetailsPayment />
        </div>
      </div>
    </div>
  );
}
