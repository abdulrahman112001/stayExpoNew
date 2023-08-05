"use client";
import { Button, Tabs } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import imgCustomer from "../../public/assets/discount.jpg";
import CheckboxComp from "../component/atoms/CheckBox";
import DateInputComp from "../component/atoms/DateInput";
import DropDown from "../component/atoms/DropDown";
import Rating from "../component/atoms/Rating";
import SelectForm from "../component/atoms/SelectForm";
import { CardSearch } from "../component/template/CardSearch";
import CustomNavigatonDetails from "../component/mucles/CustomNavigatonDetails";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      <CustomNavigatonDetails/>
    <div className="container m-auto md:p-2">



      <div className="grid grid-cols-12 p-2 md:p-0">
        <div className="hidden col-span-3 md:block">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
              height="150"
              allowFullScreen
              loading="lazy"
              className="w-full rounded-xl"
            ></iframe>
          </div>
          <div className="mt-5">
            <p>Sort By</p>
            <SelectForm />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Deals</h3>
            <CheckboxComp
              className="mt-3"
              label="Retail - you pick the hotel"
            />
            <CheckboxComp
              className="mt-3"
              label="Express Deals & Pricebreakers"
            />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Your Budget</h3>
            <div className="w-full mt-3">
              <CheckboxComp  label="$$$$$" text='($0 to $80 per night)' />
            </div>
            <div className="w-full mt-3">
              <CheckboxComp label="$$$$$" text='($0 to $80 per night)' />
            </div>
            <div className="w-full mt-3">
              <CheckboxComp label="$$$$$" text='($0 to $80 per night)' />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Rate Options</h3>
            <div className="">
              <CheckboxComp className="mt-3" label=" Free Cancellation" text="(22)" />
            </div>
            <div className="">
              <CheckboxComp className="mt-3" label="Pay Later " text="(31)" />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Hotel Star Level </h3>
            <div>
              <Rating>
                <Tabs.List>
                  <Tabs.Tab
                    value="five"
                    // icon={<IconSettings size="1rem" />}
                  >
                    5+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="six"
                    // icon={<IconMessageCircle size="1rem" />}
                  >
                    6+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="seven"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    7+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="eight"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    8+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="night"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    9+
                  </Tabs.Tab>
                </Tabs.List>
              </Rating>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Property Type </h3>
            <div className="">
              <CheckboxComp className="mt-3" label="Hotels " text="(9)" />
            </div>
          </div>
          <div className="mt-5 border border-[#5d22d5] rounded-xl p-3">
            <h4>Best Price Guaranteed</h4>
            <h4>Exclusively for Priceline members</h4>

            <p>
              Book now and well refund the difference if you find a lower price
            </p>
          </div>
          <div className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
              height="150"
              allowFullScreen
              loading="lazy"
              className="w-full rounded-xl"
            ></iframe>
          </div>
          <div className="mt-5">
            <div className="p-4 m-auto text-center border rounded-xl">
              <Image className="m-auto" src={imgCustomer} alt="customer" />
              <h3 className="mt-3">Special discounts when you call</h3>
              <p className="mt-3">
                1 in 4 people saved 20% or more over the phone.
              </p>
              <p className="">
                <span className="font-bold">StayExpo®</span> PHONE DEALS
              </p>
              <p className="flex justify-center ">
                <span className="mt-3">
                  <IconPhone />
                </span>
                <a href="">+20 122 108 3507</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:px-5 md:col-span-9">
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
            
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
        </div>
      </div>

    </div>
    </>
  );
}
