"use client";
import React, { useState } from 'react'
import FilterCustom from '../Search/FilterCustom';
import Image from 'next/image';
import { IconLayoutSidebarRight } from '@tabler/icons-react';
import SideNavBlog from './SideNavBlog';

export const BlogModal = () => {
    const [openBlogModal, setOpenBlogModal] = useState(false);
  return (
    <>
    <button className=" text-white bg-bg_banfsgy  hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy" onClick={() => setOpenBlogModal(true)}>
        <div className="flex flex-col items-center justify-center ">
        <IconLayoutSidebarRight />
        <p className="text-white "></p>
        </div>
    </button>

    <FilterCustom isOpen={openBlogModal} title='Find what you want' isClosed={() => setOpenBlogModal(false)}>
        <div className="col-span-3 ">
            <SideNavBlog />
        </div>
    </FilterCustom>
</>
  )
}
export default BlogModal
