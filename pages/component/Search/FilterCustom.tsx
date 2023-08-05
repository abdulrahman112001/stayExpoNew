import { Drawer, ScrollArea } from "@mantine/core";
import { ReactNode } from "react";

type FilterCustom_TP = {
  children: ReactNode;
  isOpen: boolean;
  title?: string;
  isClosed: () => void;
};

export default function FilterCustom({ children,title,isOpen, isClosed }:FilterCustom_TP) {

  return (
    <div>
      <Drawer
        opened={isOpen}
        onClose={isClosed}
        title={title}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {children}
      </Drawer>
    </div>
  );
}
