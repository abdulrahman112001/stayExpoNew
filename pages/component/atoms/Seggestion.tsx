import React from 'react'
import home from "./../../../public/assets/home (2).png"
import Image from 'next/image'
import Link from 'next/link'
export const Seggestion = () => {
  return (
    <div className='border mx-2 border-bg_banfsgy rounded-3xl  bg-violet-200'>
        <div className='flex flex-col '>
            <div className='m-auto'>
                <Image src={home.src} height='80' width='80' alt='' />
            </div>
            <div className='bg-white  rounded-b-3xl  py-2 px-10 '>
                <Link href="" className=' m-auto font-semibold text-sm text-bg_banfsgy'>Place to stay ?</Link>
            </div>
        </div>
         
    </div>
  )
}
export default Seggestion