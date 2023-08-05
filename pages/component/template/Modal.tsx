import { Modal } from "@mantine/core";
import { ReactNode } from "react";

type ModalComp_TP = {
  children: ReactNode;
  opened: boolean;
  isClose: () => void;
  title:string
  fullScreen?:boolean
};

function ModalComp({ children, opened, isClose , title , fullScreen }: ModalComp_TP) {
  //   const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={isClose} withCloseButton={true} title={title} fullScreen={fullScreen}>
        {children}
      </Modal>
    </>
  );
}

export default ModalComp;
