"use client";
import { IconLayoutSidebarRight } from '@tabler/icons-react';
import { useState } from 'react';
import FilterCustom from '../Search/FilterCustom';
import SideNavBlog from './SideNavBlog';

export const BlogModal = () => {
    const [openBlogModal, setOpenBlogModal] = useState(false);
  return (
    <>
    <button className="inline-flex items-center p-2 mr-2 text-sm font-medium text-center text-white rounded-lg  bg-bg_banfsgy hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy" onClick={() => setOpenBlogModal(true)}>
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
