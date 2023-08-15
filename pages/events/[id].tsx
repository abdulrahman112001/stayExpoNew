"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import AccordionComp from "../component/accordion/Accordion";
import Button from "../component/atoms/Button";
import {
  IconArrowBarRight,
  IconArrowRight,
  IconCalendar,
  IconFlag,
  IconInfoCircle,
  IconWifi,
} from "@tabler/icons-react";
import { IconArrowAutofitRight } from "@tabler/icons-react";
import { Accordion, Select, TextInput, createStyles, rem } from "@mantine/core";
import SideBar from "../component/template/SideBar";
import InputCustom from "../component/atoms/InputCustom";
import SelectNormal from "../component/atoms/Select";
import InputFloatingLabel from "../component/atoms/InputFloatingLabel";
import DateInputComp from "../component/atoms/DateInput";
import TextereaCustom from "../component/atoms/Texterea";
import CheckboxComp from "../component/atoms/CheckBox";

const useStyles = createStyles((theme) => ({
  controls: {
    display: "flex",
    marginTop: theme.spacing.xs,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderleft: 0,
  },
  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function Event() {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles();

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s: any) => {
      return [
        ...s,
        {
          type: "text",
        },
      ];
    });
  };
  const removeInputFields = (index: any) => {
    const rows = [...arr];
    rows.splice(index, 1);
    setArr(rows);
  };

  return (
    <div>
      <div className="relative bg-gray-50  ">
        <div>
          <Image
            className="!w-full brightness-50 lg:h-[70vh] h-[90vh]"
            alt="banner"
            width="500"
            height="500"
            src="https://ik.imagekit.io/etg/tr:w-1920,h-425/expobeds.com/skeleton/panorama-miami-florida-water.jpg"
          />
        </div>
        <div className="absolute lg:top-[70px] top-[10px] w-[100%] ">
          <div className="grid lg:grid-cols-12  grid-cols-1  lg:gap-10 gap-5">
            <div className="lg:col-span-8 col-span-1 lg:p-10 p-5">
              <div className="grid lg:grid-cols-12 lg:gap-10 gap-5 grid-cols-1 ">
                <div className="lg:col-span-4 col-span-1 ">
                  <Image
                    src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                    width={150}
                    height={150}
                    alt="eventImg"
                    className=" rounded-lg lg:h-[200px] m-auto h-[150px] lg:w-[90%] w-[150px] "
                  />
                </div>
                <div className="lg:col-span-7 col-span-1">
                  <h4 className="text-white  text-3xl font-semibold lg:text-left  text-center leading-6 pb-3 ">
                    gamescom 2023
                  </h4>
                  <div className="lg:text-left text-center">
                    <span className=" text-[#9E9E9E] font-semibold text-base  lg:mr-2 ">
                      Interior construction
                    </span>
                    <span className=" text-[#9E9E9E] font-semibold text-base  lg:mr-2 ">
                      
                      Paints
                    </span>
                    <span className=" text-[#9E9E9E] font-semibold text-base  lg:mr-2">
                      
                      Chemical industry
                    </span>
                  </div>
                  <div className="lg:text-left text-center">
                    <p className="text-white lg:py-5 py-2 text-2xl lg:text-left text-center inline-flex items-center ">
                      Aug 14, 2023 - Aug 16, 2023
                      <IconCalendar className="ml-2" />
                    </p>
                    <p className="text-white text-base lg:pt-2 lg:text-left text-center ">
                      
                      Guangzhou, China 382 Yuejiang Middle Rd, Haizhu,
                      Guangzhou, Guangdong, China
                    </p>
                    <button
                      className="text-white text-base lg:text-left text-center font-light bg-bg_banfsgy py-1 mt-5 px-2 rounded-2xl"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Group Booking
                    </button>
                  </div>
                </div>
                <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
                  <h3 className="py-5 lg:text-4xl text-2xl font-light ">
                    Book your Hotel
                  </h3>

                  <div className="bg-gray-100 grid lg:grid-cols-12 grid-cols-1 gap-2 p-2 rounded-lg">
                    <div className="lg:col-span-5 col-span-1">
                      <InputFloatingLabel
                        label="Campany Name"
                        className="rounded-md  focus:border-bg_banfsgy"
                      />
                    </div>
                    <div className="lg:col-span-2 col-span-1">
                      <SelectNormal
                        placeholder="Gander"
                        className="rounded-md pt-4  focus:border-bg_banfsgy"
                      />
                    </div>
                    <div className="lg:col-span-5  col-span-1">
                      <InputFloatingLabel
                        label="Contact name"
                        className="rounded-md  focus:border-bg_banfsgy"
                      />
                    </div>
                    <div className="lg:col-span-4  col-span-1">
                      <InputFloatingLabel
                        label="Country"
                        className="rounded-md  focus:border-bg_banfsgy"
                      />
                    </div>
                    <div className="lg:col-span-4  col-span-1">
                      <InputFloatingLabel
                        label="Phone number"
                        className="rounded-md  focus:border-bg_banfsgy"
                      />
                    </div>
                    <div className="lg:col-span-4  col-span-1">
                      <InputFloatingLabel
                        label="Email"
                        className="rounded-md  focus:border-bg_banfsgy"
                      />
                    </div>

                    {arr?.map((item, index) => (
                      <>
                        <div className="lg:col-span-3  col-span-1">
                          <SelectNormal
                            placeholder="Room Type "
                            className="rounded-md pt-4  focus:border-bg_banfsgy"
                          />
                        </div>
                        <div className="lg:col-span-3  col-span-1">
                          <InputFloatingLabel
                            type="number"
                            label="Room Count"
                            className="rounded-md pt-4  focus:border-bg_banfsgy"
                          />
                        </div>
                        <div className="lg:col-span-6 pt-4  col-span-1">
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-11">
                              <DateInputComp placeholder="Check-in - Check-out " />
                            </div>
                            <div className="col-span-1 py-2">
                              <button
                                className="text-red-600"
                                disabled={arr?.length > 1 ? false : true}
                                onClick={() => {
                                  removeInputFields(index);
                                }}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                    <div className="lg:col-span-6 pt-2  col-span-1">
                      <button
                        className="text-white bg-[#f30] rounded-2xl py-1 px-2"
                        onClick={addInput}
                      >
                        +add room
                      </button>
                    </div>
                    <div className="lg:col-span-12 pt-3  col-span-1">
                      <Accordion variant="separated">
                        <Accordion.Item
                          className={classes.item}
                          value="another-account"
                        >
                          <Accordion.Control fz="sm">
                            Send us more details to get an even more
                            personalised offer
                            <span className=" text-red-600 "> *</span>Optional
                          </Accordion.Control>
                          <Accordion.Panel>
                            <div className="grid lg:grid-cols-12 grid-cols-1 gap-2">
                              <div className="lg:col-span-4 col-span-1">
                                <SelectNormal
                                  placeholder="Preferred Contact Time"
                                  className="rounded-md pt-2  focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-4 col-span-1">
                                <SelectNormal
                                  placeholder="Desired Area"
                                  className="rounded-md pt-2  focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-4 col-span-1">
                                <SelectNormal
                                  placeholder="Budget"
                                  className="rounded-md pt-2  focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-6 col-span-1">
                                <SelectNormal
                                  placeholder="Favourite Hotel/Hotel Chain"
                                  className="rounded-md pt-2  focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-6 col-span-1">
                                <SelectNormal
                                  placeholder="Additional Services"
                                  className="rounded-md pt-2  focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-12 col-span-1">
                                <TextereaCustom />
                              </div>
                              <div className="lg:col-span-12 col-span-1 mt-3">
                                <CheckboxComp
                                  label={`I am OK with ExpoBeds'`}
                                  text="Privacy Policy"
                                  className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
                                />
                              </div>
                              <div className="lg:col-span-12 col-span-1 mt-3">
                                <CheckboxComp
                                  label={`Receive news and special offers via email`}
                                  className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
                                />
                              </div>
                             
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                      <div className="lg:col-span-12 col-span-1 py-5 text-center mt-5">
                                <Button
                                  children="Send Request"
                                  className="text-white font-light bg-bg_banfsgy rounded-2xl text-base lg:text-xl py-1 px-5"
                                />
                      </div>
                    </div>
                  </div>
                </SideBar>
              </div>
            </div>
            <div className="lg:col-span-4 lg:block hidden  lg:pt-10 p-5 ">
              <div className="flex flex-col ">
                <div className=" bg-[#0006]  p-5  rounded-2xl ">
                  <p className="text-white  lg:text-5xl py-5  font-light ">
                    
                    Need <span className="text-[#f30]"> 5</span> or less rooms?
                  </p>
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="text-white lg:text-2xl font-light ">
                        
                        Try our online
                      </p>
                      <p className="text-white lg:text-2xl font-light  ">
                        booking tool
                      </p>
                    </div>
                    <div>
                      <Link href='/search' className="text-white text-base font-light bg-[#f30] py-1 px-2 rounded-2xl">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 bg-gray-50 p-4  first-letter:">
        <div className="col-span-12  md:col-span-8 relative z-[100] px-2  translate-y-[-60px]  ">
          <div className="grid grid-cols-1">
            <div className="col-span-1 bg-white shadow rounded-xl">
              <div className="p-5">
                <h4 className="pb-3 pt-1 text-2xl  ">About gamescom 2023</h4>

                <p className="py-2">
                  Everyone in the gaming world, from developers, to cosplay
                  enthusiasts, will gather in Cologne for the upcoming
                  <strong>gamescom 2023</strong> in-person edition scheduled
                  from <strong>22th to 27th August 2023.</strong> As usual, the
                  Opening Night Live - ONL will take place on the 22nd, followed
                  by a five-day epic-action-packed exhibition and conference
                  programme offering novelties for everyone from all corners of
                  the gaming world at Koelnmesse.
                </p>
                <p className="py-2">
                  With over ten gamescom areas, the gaming trade show will guide
                  all visitors through a wealth of sensory experiences at the
                  entertainment, indie, retro, cosplay village, business,
                  gamescom event area and many others. There is a section for
                  action, RPG, adventure, strategy, multiplayers, VR/AR,
                  simulation and never-seen-before games at the indie
                  developers’ area. The showcase and merchandise area, powered
                  by MINI, is supported by critical educational events going
                  beyond the pure entertainment expo portfolio and diving into
                  education, industry, healthcare and social coexistence topics.
                  Everyone in the gaming world, from developers, to cosplay
                  enthusiasts, will gather in Cologne for the upcoming
                  <strong>gamescom 2023</strong> in-person edition scheduled
                  from <strong>22th to 27th August 2023.</strong> As usual, the
                  Opening Night Live - ONL will take place on the 22nd, followed
                  by a five-day epic-action-packed exhibition and conference
                  programme offering novelties for everyone from all corners of
                  the gaming world at Koelnmesse.
                </p>
                <p className="py-2">
                  Everyone in the gaming world, from developers, to cosplay
                  enthusiasts, will gather in Cologne for the upcoming
                  <strong>gamescom 2023</strong> in-person edition scheduled
                  from <strong>22th to 27th August 2023.</strong> As usual, the
                  Opening Night Live - ONL will take place on the 22nd, followed
                  by a five-day epic-action-packed exhibition and conference
                  programme offering novelties for everyone from all corners of
                  the gaming world at Koelnmesse.
                </p>
              </div>
            </div>

            <div className="col-span-1 mt-5  ">
              <iframe
                src="https://www.youtube.com/embed/_gTCqw5S2VU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                height="500"
                allowFullScreen
                loading="lazy"
                className="w-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 relative z-[100]  px-2  translate-y-[-60px]   ">
          <div className="grid grid-cols-1">
            <div className="col-span-1 mb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">Quick Info. </h3>

                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Organizer:</strong>
                  Mohammed Ahmed
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Founded:</strong> 2004
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  every 2 years
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Next Edition:</strong>
                  every 2 years
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  About gamescom 2025
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Sector:</strong>
                  Interior | Interior | Interior | Interior
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  About gamescom 2025
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Website:</strong>
                  <Link href="/">Link</Link>
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Exhibtors:</strong>
                  Exhibtor registration
                </p>
                <p className="py-2 text-[#9E9E9E] flex items-center">
                  <IconFlag className="text-[#9E9E9E]" /> Report Error
                </p>
              </div>
            </div>
            <div className="col-span-1 text-center rounded-lg w-[100%] py-3 bg-bg_banfsgy text-white">
              <p className="text-white text-3xl  flex items-center  justify-around font-light">
                
                <IconWifi className=" text-white" /> Live Availability
                <IconArrowRight className=" text-white hover:translate-x-2" />
              </p>
            </div>
            <div className="col-span-1 mb-5 mt-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">
                  Important Facts .
                </h3>
                <ul className="list-disc pl-4">
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 mb-5 mt-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">Next editions . </h3>
                <div className="flex flex-row items-center  ">
                  <Image
                    src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                    width={100}
                    height={100}
                    alt="nextEdition"
                  />
                  <div className="ml-2">
                    <h6 className="py-2 text-lg font-semibold">
                      gamescom 2025
                    </h6>
                    <p className="text-sm ">Dates are not know yet</p>
                    <Link
                      href=""
                      className="px-1 rounded-lg text-xs bg-gray-700 text-white"
                    >
                      Notify Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 mb-5 mt-5 pb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-5 text-4xl font-light ">
                  
                  Trade fair location .
                </h3>
                <div className="flex flex-col">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
                    height="150"
                    allowFullScreen
                    loading="lazy"
                    className="w-full rounded-xl"
                  ></iframe>
                  <h6 className="text-lg font-semibold mt-2">Messe Munich</h6>
                  <p>Messegland Munich Germany</p>
                  <p className="mb-5">
                    <strong>Coordinats:</strong> 48.5134.11.232
                  </p>
                  <button className="bg-bg_banfsgy m-auto rounded-full px-2 py-1 text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="grid lg:grid-cols-12 grid-cols-1 bg-bg_banfsgy  text-white gap-10 p-5">
          <div className="lg:col-span-3 col-span-1 pl-5 flex">
            <h3 className="text-3xl m-auto">Stay in touch</h3>
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className={classes.controls}>
              <TextInput
                placeholder="Your email"
                classNames={{
                  input: classes.input,
                  root: classes.inputWrapper,
                }}
              />
              <Button className={` bg-[#f30]  text-white`}>Subscribe</Button>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1 flex">
            <p className="text-white pt-1 m-auto ">
              Sign up for mailing list and be the first to find out about our
              best deals, news and more
            </p>
          </div>
        </div>
        <div className=" bg-gray-100 py-10">
          <h3 className="text-3xl p-5 m-auto">Similar events</h3>
          <div className="grid lg:grid-cols-8 grid-cols-4  max-sm:grid-cols-2  gap-10 px-8">
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center  py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1 w-[100%]">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center  py-2">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="text-base text-center py-2">Parts2Clean</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
