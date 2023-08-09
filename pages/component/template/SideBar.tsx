import { IconBackhoe, IconX } from "@tabler/icons-react";
import React from "react";

type SideBar_TP = {
  children?: React.ReactNode;
  onOpen?: any;
  onClose?: any;
  closeButton?:any;
  backButton?:any;
};
export default function SideBar({ children, onOpen, onClose,closeButton,backButton }: SideBar_TP) {
  return (
    <div>
      <div
        className={`${
          (onOpen && "!block") || ""
        } fixed inset-0 bg-[black]/60 z-[1000] px-4 hidden transition-[display]`}
        onClick={() => onClose(false)}
      ></div>

      <nav
        className={`${
          (onOpen && "!left-0 ") || ""
        } bg-white fixed -left-[50%] top-0 bottom-0 w-full lg:max-w-[50%] z-[1000] sm:max-w-[80%]  sm:-left-[80%]   max-sm:max-w-[80%]  max-sm:-left-[80%]   shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[left] duration-700 p-4`}
      >
        <div className="h-full overflow-x-hidden overflow-y-auto perfect-scrollbar">
          <div className="relative pb-5">
            {closeButton?
            <button
              type="button"
              className="absolute top-0 right-0 opacity-30 hover:opacity-100 dark:text-white"
              onClick={() => onClose(false)}
            >
              <IconX className=" text-bg_banfsgy" />
            </button>
            :
            null
            }
             {backButton?
            <button
              type="button"
              className="absolute top-0 right-0 opacity-30 hover:opacity-100 dark:text-white"
              onClick={() => onClose(false)}
            >
              <IconBackhoe className=" text-bg_banfsgy" />
            </button>
            :
            null
            }
            <div className="pt-5">{children}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
