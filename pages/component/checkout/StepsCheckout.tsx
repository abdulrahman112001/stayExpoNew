"use client";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import DetailsBooking from "./DetailsBooking";
import DetailsPayment from "./DetailsPayment";
import Confirmation from "./Confirmation";

function StepsChexkOut() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Choose Room">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Guest & Payment Details">
          <div className="grid grid-cols-12 mt-5">
            <div className="col-span-12 md:col-span-8">
              <DetailsBooking />
              <Group position="center" mt="xl">
                {/* <Button variant="default" onClick={prevStep}>Complete Booking</Button> */}
                <div className="fixed  p-3 mt-5 border shadow-md rounded-xl bottom-[1%] left-[117px] w-[55%] bg-white">
                  <Button
                    variant="default"
                    className="w-full text-white bg-bg_banfsgy rounded-xl hover:bg-bg_banfsgy"
                    onClick={nextStep}
                  >
                    Complete Booking
                  </Button>
                </div>
              </Group>
            </div>
            <div className="col-span-12  md:col-span-4">
              <DetailsPayment />
            </div>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Booking Confirmation">
          <Confirmation/>
          
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </>
  );
}

export default StepsChexkOut;
