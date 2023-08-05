import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/americanExpress.b3d0158b.png";
import img2 from "../../../public/assets/comodo.8b7192eb.png";
import img3 from "../../../public/assets/decta.4e998eab.png";
import img4 from "../../../public/assets/351782734_805374517490850_1285298802741953849_n.png";
import img5 from "../../../public/assets/stripe.bdb07a0f.png";
import useFetch from "@/pages/hooks/useFetch";

function Security() {
  interface Partner {
    partners: {
      id: number;
      name: string;
      image: string;
      content: string;
      updated_at: string;
    };

    // Add more properties if needed...
  }
  const { data: Partners } = useFetch<{
    data: {
      [x: string]: any;
      blogs: Partner[];
    };
  }>({
    endpoint: `api/section/partner`,
    queryKey: [`partner`],
  });

  console.log("🚀 ~ file: Security.tsx:21 ~ Security ~ Partners:", Partners);
  return (
    <div className="bg-[#f8f8f8] p-5 md:p-20 mt-10">
      <h4 className="relative  mt-5 py-5 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
        Security
      </h4>
      <p className="w-full py-2 md:w-1/2">
        Our partners guarantee the security of your data and payments with their
        global reputation.
      </p>
      <div className="grid items-center justify-center grid-cols-5 mt-8">
        {Partners?.data?.partners?.map((item:any) => (
          <div className="w-[60%]" key={item?.image}>
            <Image
              className="w-full"
              src={item?.image}
              width={50}
              height={50}
              alt="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Security;
