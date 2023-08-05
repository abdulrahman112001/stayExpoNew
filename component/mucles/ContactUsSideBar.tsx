import CallUsCell from "../atoms/CallUsCell";
import EmailCell from "../atoms/EmailCell";
import IconEarth from "../../../public/assets/global.svg"
import IconEgypt from "../../../public/assets/Egypt.svg.png"
import Image from "next/image";

 function ContactUsSideBar() {
  return (
     <div>
        <div className="mt-5">
        <div className="flex flex-row pb-2"><Image src={IconEarth.src} alt="" width={30} height={20} /><span className="pl-3  font-bold text-2xl "> Global</span></div>
        <CallUsCell />
        <CallUsCell />
        <EmailCell />
        </div>
        <div className="mt-5">
        <div className="flex flex-row pb-2"><Image className=" rounded-3xl "  src={IconEgypt.src} alt="" width={30} height={20} /><span className="pl-3  font-bold text-2xl "> Egypt</span></div>
        <CallUsCell />
        </div>
     </div>
    
  );
}
export default ContactUsSideBar
