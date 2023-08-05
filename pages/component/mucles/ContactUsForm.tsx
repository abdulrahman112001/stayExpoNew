import React from "react";
import InputCustom from "../atoms/InputCustom";
import SelectNormal from "../atoms/Select";
import CheckboxComp from "../atoms/CheckBox";
import TextereaCustom from "../atoms/Texterea";
import Button from "../atoms/Button";

export const ContactUsForm = () => {
  return (
    <form className="">
      <div className="grid gap-3 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 mb-7">
        <div className="lg:col-span-4 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12 ">
          <InputCustom
            placeholder="Campany name"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="lg:col-span-1 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12 ">
          <SelectNormal />
        </div>
        <div className="lg:col-span-4 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12">
          <InputCustom
            placeholder="Contact name"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="lg:col-span-3 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12">
          <InputCustom
            placeholder="Phone number"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-12 mt-3">
          <InputCustom
            placeholder="Email"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-12 mt-3">
          <TextereaCustom
            placeholder="Message"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-5 mt-3">
          <CheckboxComp
            label={`I am OK with ExpoBeds''`}
            text="Privacy Policy"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-5 mt-3"></div>
      </div>
      <div className="flex">
        <Button
          className="py-3 m-auto text-xl font-light px-14 rounded-3xl"
        >
          Send
        </Button>
      </div>
    </form>
  );
};
export default ContactUsForm;
