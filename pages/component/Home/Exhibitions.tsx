"use client";

import { Carousel } from "@mantine/carousel";

import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { BlogCard } from "../mucles/BlogCard";
interface EventData {
  id: string;
  image: string;
  title: string;
  content: string;
  avatar:string
  start_date:string
}

function Exhibitions() {
  // Blogs
  const { data: Events } = useFetch({
    endpoint: `api/section/event`,
    queryKey: [`All-Events`],
  });
  const eventsData = (Events as { data?: { events: EventData[] } })?.data
    ?.events;


  // const sanitizedData = removeHTMLTags(terms?.content);
  return (
    <div className="px-20 m-auto my-5 md:px-20 max-sm:px-2">
      <div className="col-span-1 p-5">
        <h1 className="relative  mt-5 py-5 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
          Upcoming Events
        </h1>
        <p className="w-full py-2 md:w-1/2">
          We take part in the most important international industry events in
          London, Paris, Dubai, and Singapore. Come and visit our stand!
        </p>
      </div>
      <div className="px-5 mt-4">
        <Carousel
          withIndicators
          // height={200}
          slideSize="22%"
          slideGap="md"
          loop
          align="start"
          // slidesToScroll={1}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "90%", slideGap: "xs" },
          ]}
        >
          {eventsData?.map((item: EventData) => (
            <Carousel.Slide key={item?.id}>
              <Link href={`/events/${item?.id}`}>
              <BlogCard
                image={item?.image}
                avatar={item?.avatar}
                name={item?.title}
                Date={item?.start_date}
                title={"RemoveHTMLTags(item?.content?.slice(0, 50))"}
              />
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Exhibitions;
