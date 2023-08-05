import {
  IconBedFilled,
  IconFridge,
  IconMicrowave,
  IconParking,
  IconToolsKitchen,
  IconWifi,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import InputCustom from "../atoms/InputCustom";
import CheckboxComp from "../atoms/CheckBox";

export default function DetailsBooking() {
  return (
    <div>
      <div className="flex gap-2">
        <h2 className="font-bold">Almost done!</h2>
        <p>Enter your details and complete your booking now.</p>
      </div>
      <div className="p-3 border shadow-md rounded-xl">
        <div className="flex gap-2 ">
          <Image
            alt="hotel img"
            width="266"
            height="199"
            className="rounded-xl"
            src="https://q-xx.bstatic.com/xdata/images/hotel/max300/378070506.jpg?k=462c2d479c4b46ae8c6de2f90e45cc188ce1add5a7214f7e8353b37c4d41c412&o="
          />
          <div className="">
            <h1 className="text-2xl font-bold">
              Sonesta ES Suites Cincinnati - Sharonville East
            </h1>
            <small className="text-sm">Cincinnati North - Sharonville</small>
            <div className="flex gap-3 mt-3">
              <h3 className="font-bold text-white bg-[#f68013] text-xs p-1 px-3 rounded">
                8.5
              </h3>
              <h1 className="font-bold">Good</h1>
              <span>|</span>
              <h1 className="font-bold">3-STAR HOTEL</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f6f8] p-3 rounded-xl mt-5">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold">CHECK-IN</h2>
              <h1 className="font-bold">Mon, Jun 19, 2023</h1>
            </div>
            <div>
              <h2 className="font-bold">CHECK-OUT</h2>
              <h1 className="font-bold">Tue, Jun 20, 2023</h1>
            </div>
            <div className="flex gap-10 ">
              <div className="text-center">
                <h2 className="font-bold">NIGHTS</h2>
                <h1 className="font-bold">1</h1>
              </div>
              <span>|</span>
              <div className="text-center">
                <h2 className="font-bold">ROOMS</h2>
                <h1 className="font-bold">1</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold">One-Bedroom King Suite</h3>
          <p className="flex gap-1">
            <IconBedFilled />
            <small>Bedroom: 1 King Bed, Living room: 1 Sofa Bed</small>
          </p>
          <div>
            <h3 className="flex gap-1">
              <IconParking className="w-[20px] text-white fill-green-400" />
              <small className="text-green-500 ">Free Parking</small>
            </h3>
            <h3 className="flex gap-1">
              <IconWifi className="text-green-400 w-[20px]  " />
              <small className="text-green-500 ">Free WIFI</small>
            </h3>
            <h3 className="flex gap-1">
              <IconToolsKitchen className="w-[20px] " />
              <small className="">Kitchen</small>
            </h3>
            <h3 className="flex gap-1">
              <IconFridge className="w-[20px] " />
              <small className="">Fridge</small>
            </h3>
            <h3 className="flex gap-1">
              <IconMicrowave className="w-[20px] " />
              <small className="">Microwave</small>
            </h3>
          </div>
        </div>
      </div>
      <div className="p-3 mt-5 border shadow-md rounded-xl">
        <div className="bg-[#f4f6f8] p-1 rounded-xl ">
          <p>
            The guest checking into each hotel room must be 21 or older, present
            a valid Photo ID and credit card.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Guest Name</h1>
          <div className="mt-3">
            <div className="grid grid-cols-2">
              <div className="col-span-1 p-2">
                <InputCustom placeholder="First Name" />
              </div>

              <div className="col-span-1 p-2">
                <InputCustom placeholder="Last Name" />
              </div>
            </div>
            <CheckboxComp label="Guest name and name on card are the same" />
          </div>
        </div>
      </div>
      <div className="p-3 mt-5 border shadow-md rounded-xl">
        <h1 className="font-bold">Payment</h1>
        <div className="flex gap-2">
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/visa.svg"
          />
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/mastercard.svg"
          />
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/amex.svg"
          />
        </div>
        <div>
          <InputCustom placeholder="Name on card *" className="!mt-3" />
          <InputCustom placeholder="Card number *" className="!mt-3" />
          <InputCustom placeholder="MM/YYYY *" className="!mt-3" />
        </div>
      </div>
      <div className="p-3 mt-5 border shadow-md rounded-xl">
        <h1 className="font-bold">Billing</h1>

        <div>
          <InputCustom placeholder="Street address *" className="!mt-3" />
          <InputCustom placeholder="Country" className="!mt-3" />
          <InputCustom placeholder="Zip code *" className="!mt-3" />
          <InputCustom placeholder="City *" className="!mt-3" />
          <InputCustom placeholder="Email address *" className="!mt-3" />
        </div>
      </div>
      <div className="p-3 mt-5 border shadow-md rounded-xl">
        <h1 className="font-bold">Important Information</h1>

        <div>
         <ul className="mx-6 my-4 list-disc" >
          <li>Check-in begins at 4pm and check-out is at 11am.</li>
          <li>Check-in begins at 4pm and check-out is at 11am.</li>
          <li>Check-in begins at 4pm and check-out is at 11am.</li>
          <li>Check-in begins at 4pm and check-out is at 11am.</li>
          <li>Check-in begins at 4pm and check-out is at 11am.</li>

         </ul>
        </div>
      </div>
    </div>
  );
}
