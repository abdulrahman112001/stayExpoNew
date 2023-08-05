import { IconBedFilled, IconCheck, IconMan } from "@tabler/icons-react";
import React from "react";
import ImageGallery from "react-image-gallery";
import Button from "../atoms/Button";

const images = [
  {
    original:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714590037575589.jpg?ca=&ce=1&s=100x75",
    thumbnail:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714590037575589.jpg?ca=&ce=1&s=100x75",
  },
  {
    original:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714590037575589.jpg?ca=&ce=1&s=100x75",
    thumbnail:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714590037575589.jpg?ca=&ce=1&s=100x75",
  },
];
export default function DetailsRoom() {
  return (
    <div className="mt-10">
      <div className="p-0 mt-4 overflow-hidden border rounded-sm">
        <h3>Standard Twin Room</h3>
        <p className="text-red-600">Last booked 6 hours ago</p>

        <div className="bg-[#f7f7f7] p-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-2">
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              <div className="flex items-center gap-2">
                <IconBedFilled className="text-gray-400" />
                <p className="text-sm">2 single beds</p>
              </div>
              <div className="flex items-center gap-2">
                <IconBedFilled className="text-gray-400" />
                <p className="text-sm">Room size: 23 m²/248 ft²</p>
              </div>
              <div className="flex items-center gap-2">
                <IconBedFilled className="text-gray-400" />
                <p className="text-sm">Non-smoking</p>
              </div>
              <div className="flex items-center gap-2">
                <IconBedFilled className="text-gray-400" />
                <p className="text-sm">Shower and bathtub</p>
              </div>
            </div>
            <div className="grid grid-cols-12 col-span-12 md:col-span-10">
              <div className="grid grid-cols-12 col-span-12 ">
                <div className="col-span-12 pr-0 md:col-span-4">
                  <h3>Benefits</h3>
                  <div className="h-full p-2 bg-white border-r">
                    <h3>Your price includes:</h3>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="mt-4">
                      <h3>Other rewards & discounts</h3>
                      <p className="text-[#bc9c2e] border border-[#bc9c2e] p-1 text-xs">
                        Coupon 7PCTCAP17MIN250 applied - $ 18 OFF!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2">
                  <h3>Sleeps</h3>
                  <div className="h-full text-center bg-white">
                    <div className="flex">
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                    </div>
                    <div>
                      <p>1 kid under</p>
                      <p>6</p>
                      <p>years stays</p>
                      <p>free</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3>Payment & cancellation</h3>
                  <div className="h-full p-5 bg-[#f4f8fe] ">
                    <h3 className="">Cancellation</h3>
                    <p>
                      <input type="radio" checked className="mx-2" />
                      Free cancellation before July 17, 2023
                    </p>
                    <h3 className="mt-3">Payment</h3>

                    <p>
                      <input type="radio" checked className="mx-2" />
                      Pay nothing until July 15, 2023
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2">
                  <h3>Price per night</h3>
                  <div className="p-2 bg-white border-l ">
                    <div className="mt-5 bg-red-500">
                      <p className="p-1 text-xs text-white">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      <p>$ 158</p>
                      <p className="font-bold text-red-500">$ 39</p>
                    </div>
                    <div className="text-center">
                      <span className="text-[#bc9c2e] text-[10px] m-auto">
                        Coupon 7PCTCAP17MIN250 applied
                      </span>
                    </div>
                    <div className="p-1 mt-5 text-center">
                      <Button className="w-full p-3 m-auto text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="p-1 mt-5 text-center">
                      <Button className="w-full p-3 m-auto text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="m-auto mt-4 text-end">
                      <p className="text-red-500">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 mt-10 border border-red-500 ">
                <div className="col-span-12 p-0 md:col-span-4">
           
                  <div className="h-full p-2 bg-white border-r">
                    <h3>Your price includes:</h3>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <IconCheck className="text-green " />
                      <p>Free cancellation before July 17, 2023</p>
                    </div>
                    <div className="mt-4">
                      <h3>Other rewards & discounts</h3>
                      <p className="text-[#bc9c2e] border border-[#bc9c2e] p-1 text-xs">
                        Coupon 7PCTCAP17MIN250 applied - $ 18 OFF!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2">
         
                  <div className="h-full text-center bg-white">
                    <div className="flex">
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                      <IconMan className="text-gray-500 fill-gray-500" />
                    </div>
                    <div>
                      <p>1 kid under</p>
                      <p>6</p>
                      <p>years stays</p>
                      <p>free</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
               
                  <div className="h-full p-5 bg-[#f4f8fe] ">
                    <h3 className="">Cancellation</h3>
                    <p>
                      <input type="radio" checked className="mx-2" />
                      Free cancellation before July 17, 2023
                    </p>
                    <h3 className="mt-3">Payment</h3>

                    <p>
                      <input type="radio" checked className="mx-2" />
                      Pay nothing until July 15, 2023
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2">
                  <h3>Price per night</h3>
                  <div className="p-2 bg-white border-l ">
                    <div className="mt-5 bg-red-500">
                      <p className="p-1 text-xs text-white">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      <p>$ 158</p>
                      <p className="font-bold text-red-500">$ 39</p>
                    </div>
                    <div className="text-center">
                      <span className="text-[#bc9c2e] text-[10px] m-auto">
                        Coupon 7PCTCAP17MIN250 applied
                      </span>
                    </div>
                    <div className="p-1 mt-5 text-center">
                      <Button className="w-full p-3 m-auto text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="p-1 mt-5 text-center">
                      <Button className="w-full p-3 m-auto text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="m-auto mt-4 text-end">
                      <p className="text-red-500">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
