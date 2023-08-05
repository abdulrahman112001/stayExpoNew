import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconStarFilled,
} from "@tabler/icons-react";
import Button from "../atoms/Button";
import Image from "next/image";
import { IconStarsFilled } from "@tabler/icons-react";

export default function TabsConfirmation() {
  return (
    <div>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" className="font-bold">Manage</Tabs.Tab>
          <Tabs.Tab value="messages" className="font-bold">Room</Tabs.Tab>
          <Tabs.Tab value="settings" className="font-bold">important info</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <div className="flex ">
                  <h2 className="font-bold">Confirmation</h2>
                  <div className="flex justify-between gap-1">
                    <p className="mx-2 bg-yellow-100">25498064919841</p>
                    <p className="mx-2 bg-yellow-100">25498064919841</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold">number</h2>
                  <p className="bg-yellow-100">25498064919841</p>
                </div>
                <div className="flex justify-between ">
                  <h2 className="font-bold">Hotel phone number</h2>
                  <p className="bg-yellow-100">212-803-4500</p>
                </div>
              </div>
              <div className="pt-2 mt-5 border-t border-gray-400">
                <a href="/" className="font-bold text-blue-700">
                  {" "}
                  Book again
                </a>
              </div>
              <div className="pt-2 mt-5 border-t border-gray-400">
                <h2 className="font-bold">Cancellation policy</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe dolores possimus incidunt modi aspernatur, sint neque
                  accusantium, voluptatem, ea officiis nam libero optio.
                  Obcaecati, unde consectetur. Fugiat eligendi aperiam omnis
                  dolor temporibus adipisci harum consequuntur ipsa tenetur,
                  dolores ab impedit inventore perferendis culpa? Sunt
                  asperiores dignissimos, quae ut sequi ipsum!
                </p>
                <Button className="p-2 px-4 mt-5">Cancel</Button>
              </div>
            </div>
            <div className="flex flex-col w-full px-3 border-l">
              <h2>Top FAQs</h2>
              <a href="/" className="font-bold text-blue-700">
                Can i cancel thisd reservation ?
              </a>
              <a href="/" className="font-bold text-blue-700">
                Can i cancel thisd reservation ?
              </a>
              <a href="/" className="font-bold text-blue-700">
                print a receipt
              </a>
              <a href="/" className="font-bold text-blue-700">
                see all FAQs
              </a>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          <div className="flex gap-2">
            <div>
              <Image
                className="!w-[120px] max-w-[120px] h-[120px] rounded-xl"
                src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                alt=""
                width="300"
                height="100"
              />
            </div>
            <div>
              <h2 className="font-bold">
                interContinental New Yourk Times Square
              </h2>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis estiae sint,
              </p>

              <p className="text-gray-500">Time Square - Theatre District</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold"> Reservation Name</h2>
            <div className="flex gap-2">
              <h2 className="font-bold">Room 1 </h2>
              <p>Abood Azmy</p>
            </div>
            <div className="flex gap-2" >
              <h2 className="font-bold">Room 2 </h2>
              <p>Abood Azmy</p>
            </div>
            <div className="flex gap-2">
              <h2 className="font-bold">Room 3 </h2>
              <p>Abood Azmy</p>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          <h3 className="font-bold text-gray-500">
            credit card required
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
          <h3 className="font-bold text-gray-500">
            Additional check-in information
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
          <h3 className="font-bold text-gray-500">
            Additional  information
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
