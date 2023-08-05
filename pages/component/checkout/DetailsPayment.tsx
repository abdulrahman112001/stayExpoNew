import React from "react";

export default function DetailsPayment() {
  return (
    <div className="p-3">
      <div className="p-3 border shadow-md rounded-xl">
        <div className="">
          <div className="py-2 border-b ">
            <div className="flex justify-between pt-2">
              <h3>Price per night</h3>
              <h3>$94.00</h3>
            </div>
            <div>
              <h3>1 room</h3>
            </div>
            <div className="flex justify-between pt-2">
              <h3>Number of nights</h3>
              <h3>1</h3>
            </div>
            <div className="flex justify-between pt-2 ">
              <h3>Taxes and fees</h3>
              <h3>$15.51</h3>
            </div>
          </div>
          <div className="py-3 border-b">
            <div className="flex justify-between">
              <h3 className="font-bold text-green-500">You pay today</h3>
              <h3>$0.00</h3>
            </div>
          </div>
          <div className="py-3 border-b">
            <div className="flex justify-between">
              <h3 className="f ">Due later</h3>
              <h3>$109.51</h3>
            </div>
          </div>

          <div className="py-3 ">
            <div className="flex justify-between">
              <h3 className="font-bold ">Total Cost</h3>
              <h3>$109.51</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-5 border shadow-md rounded-xl">
        <p className="text-gray-500">
        Priceline coupons can not be redeemed for this booking.

        </p>
      </div>
    </div>
  );
}
