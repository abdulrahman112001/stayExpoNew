import { IconArrowBarToRight, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import imgAbout from "../../../public/assets/aboutUs.png";
import shape from "../../../public/assets/primary-shape.png";

function About() {
  return (
    <div className="relative p-5 overflow-hidden md:px-20 max-sm:px-2 md:py-10 ">

      <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 m ">
        <div className="col-span-2 p-5 md:col-span-1 max-sm:pt-0 md:p-1">
          <h4 className="relative  mt-5 py-5 max-sm:pt-0 max-sm:mt-0 md:py-2 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px] ">About us</h4>
          <p className="w-full py-3">
            We are StayExpo and our mission is to streamline the way brands and
            businesses interact with conferences, we’re the one-stop-shop for
            hotels reservation around convention centers.
          </p>
          <Link href="" className=" mt-2 read-link text-[#5d22d5] flex flex-row  font-bolder">
            Read more <IconArrowRight className="ml-2 read-icon" />
          </Link>
        </div>
        <div className="w-[60%] max-sm:mr-[10px] max-sm:pt-0  flex md:pt-[30px]  col-span-2 md:col-span-1 m-auto">
          <Image className="w-full max-sm:mr-auto" src={imgAbout} alt="lazy" />
        </div>
      
      </div>
      <div className="absolute shapeOne">
           
              <Image  width={250} height={250} alt="shape" src={shape.src} />
            
      </div>
      <div className="absolute shapTwo">
              
        <Image alt="shape" width={100} height={100} src={shape.src} className="w-1/2" />
      </div>
    </div>
  );
}

export default About;
