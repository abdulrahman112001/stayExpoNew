"use client";
import { useForm } from "@mantine/form";
import Image from "next/image";
import shape from "../../../public/assets/primary-shape.png";
import SerachComponent from "../mucles/SerachComponent";
import useFetch from "@/hooks/useFetch";
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

  const { data: HeroSection } = useFetch({
    endpoint: `api/dashboard/part/show/home_page`,
    queryKey: [`Hero-section`],
  });

  return (
    <div className="relative Hero-section-overflow">
      <div className="container p-0 m-auto md:p-20">
        <div className="grid grid-cols-2 px-5 ">
          <div className="col-span-2 md:col-span-1 ">
          
                  <h1 className="pt-5 mt-2 text-2xl font-semibold">
                    {
                                  //@ts-ignore

                    HeroSection?.data?.parts[0].hero_title}
                  </h1>
                  <p className="mt-2">{
                                //@ts-ignore

                  HeroSection?.data?.parts[1].hero_body}</p>
   
          </div>
          <div className="col-span-2 md:col-span-1 pb-5 ">
            <form
              onSubmit={form.onSubmit((values) => {
                //console.log(values)
              })}
            >
              <SerachComponent />
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
