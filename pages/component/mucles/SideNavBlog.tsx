
import SearchInput from "../atoms/SearchInput"
import { ExploreHotels } from "./ExploreHotels"
import facebookIcon from "./../../../public/assets/facebook.svg"
import linkdlnIcon from "./../../../public/assets/linkdln.svg"
import youtubeIcon from "./../../../public/assets/youtube.svg"
import Image from "next/image"
import Link from "next/link"

export const SideNavBlog = () => {
  return (
     <div className=" ">
        <div className="mt-2 mb-5">
            <ExploreHotels />
        </div>
        <div className=" mt-7 mb-5">
            <SearchInput  />
        </div>
        <div className="mt-4 mb-4">
            <h6 className=" font-bold  text-gray-900 leading-6 mb-2 mt-4 ">
               Categories 
            </h6>
            <div className="mt-4 mb-4">
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#javascript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#javs</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#jSDSFSDFDSFDGDFGs</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1   border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#javt</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#jcript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1   border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#jaddasdavacript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg-  border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-2xl ">#js</span></Link>
            </div>
        </div>
        <div className="mt-4 mb-4">
            <h6 className=" font-bold  text-gray-900 leading-6 mb-2 mt-4 ">
               Popular Tags 
            </h6>
            <div className="">
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md ">#javascript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md   ">#javs</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md  ">#jSDSFSDFDSFDGDFGs</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md  ">#javt</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md  ">#jcript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1  bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md  ">#jaddasdavacript</span></Link>
            <Link href=""><span className=" border mt-1 ml-1
             mr-1 mb-1 bg- bg-neutral-200 border-neutral-300 hover:border-bg_banfsgy inline-block p-2 text-sm rounded-md  ">#js</span></Link>
            </div>
        </div>
        <div className="mt-4 mb-4">
            <h6 className=" font-bold  text-gray-900 leading-6 mb-2 mt-4 ">
                Follow Us For The lastest news
            </h6>
            <div className="flex flex-row  items-center">
              <Link href="/as"><Image src={facebookIcon.src} className="p-1" height={40} width={40} alt="facebookIcon" /> </Link>
               <Link href="/as"><Image src={linkdlnIcon.src} className="p-1" height={40} width={40} alt="linkdlnIcon" /></Link>
               <Link href="/as"><Image src={youtubeIcon.src} className="p-1" height={40} width={40} alt="youtubeIcon" /></Link>
            </div>
        </div>
    </div>
    
  )
}
export default SideNavBlog
