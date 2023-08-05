"use client";

import { useForm } from "@mantine/form";
import Image from "next/image";
import Link from "next/link";
import shape from "../../../public/assets/primary-shape.png";
import Button from "../atoms/Button";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import SelectForm from "../atoms/SelectForm";
function HeroSection() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="relative overflow-hidden">
      <div className="container p-0 m-auto md:p-20">
        <div className="grid grid-cols-2 px-5">
          <div className="col-span-2 md:col-span-1">
            <h1 className="pt-5 mt-2 text-2xl font-semibold">
            Book Stress-free Corporate Travel With StayExpo
            </h1>
            <p className="mt-2">
            Get the best deals on hotels, flights, and more for professionals!
            </p>
            {/* <Button variant="primary" className="p-2 px-4 w-[40%] mt-5">
            sign up
          </Button> */}
          </div>
          <div className="col-span-2 md:col-span-1">
            <form
              onSubmit={form.onSubmit((values) => {
                //console.log(values)
              })}
            >
              <div className="w-[100%] md:w-[60%] mt-10 md:ml-auto ">
                <div className="p-3 shadow-2xl rounded-xl">
                  <SelectForm />
                  <div className="grid grid-cols-2 mt-4">
                    <div className="col-span-2">
                      <DateInputComp placeholder="Check-in - Check-out " />
                    </div>
                  </div>
                  <div className="mt-4">
                    <DropDown />
                  </div>
                  <Button variant="primary" className="p-2 px-4 w-[100%] mt-5">
                    <Link href="/search">Explore Hotels</Link>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute shapeOne">
          <Image alt="shape" src={shape} />
        </div>
        <div className="absolute shapTwo">
          <Image alt="shape" src={shape} className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
