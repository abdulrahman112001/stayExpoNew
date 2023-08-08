import { IconX } from "@tabler/icons-react";
import React from "react";

type SideBar_TP = {
  children?: React.ReactNode;
  onOpen?: any;
  onClose?: any;
};
export default function SideBar({ children, onOpen, onClose }: SideBar_TP) {
  return (
    <div>
      <div
        className={`${
          (onOpen && "!block") || ""
        } fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`}
        onClick={() => onClose(false)}
      ></div>

      <nav
        className={`${
          (onOpen && "!right-0 ") || ""
        } bg-white fixed -right-[50%] top-0 bottom-0 w-full lg:max-w-[50%]  sm:max-w-[80%]  sm:-right-[80%]   max-sm:max-w-[80%]  max-sm:-right-[80%]   shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-700  z-[51] p-4`}
      >
        <div className="h-full overflow-x-hidden overflow-y-auto perfect-scrollbar">
          <div className="relative pb-5">
            <button
              type="button"
              className="absolute top-0 right-0 opacity-30 hover:opacity-100 dark:text-white"
              onClick={() => onClose(false)}
            >
              <IconX className=" text-bg_banfsgy" />
            </button>
            <div className="pt-5">{children}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
