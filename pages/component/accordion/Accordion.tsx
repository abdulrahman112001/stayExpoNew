import React from "react";
import { Accordion } from '@mantine/core';
import SelectForm from "../atoms/SelectForm";

export default function AccordionComp() {
  return (
    <div>
      <Accordion defaultValue="customization">
        <Accordion.Item  value="LOCATION">
          <Accordion.Control >LOCATION</Accordion.Control>
          <Accordion.Panel>
          <SelectForm/>

            <h3 className="text-red-600">Anywhere</h3>
            <ul>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item  value="DATES">
          <Accordion.Control>DATES</Accordion.Control>
          <Accordion.Panel>
          <h3 className="text-red-600">All upcoming</h3>
            <ul>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item  value="INDUSTRY">
          <Accordion.Control>INDUSTRY</Accordion.Control>
          <Accordion.Panel>
          <SelectForm/>

          <h3 className="text-red-600">All industries</h3>
            <ul>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>
                <li>Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
