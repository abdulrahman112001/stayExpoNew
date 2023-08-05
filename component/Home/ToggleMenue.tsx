import { Menu, Button, rem } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { Burger } from "@mantine/core";
function ToggleMenue() {
  return (
    <Menu width={250} shadow="md">
      <Menu.Target>
        <Burger size="sm" opened={false} />
      </Menu.Target>
 
      <Menu.Dropdown>
        <Menu.Item>For business</Menu.Item>

        <Menu.Item>Contacts</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Booking payment methods</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Loyalty Program</Menu.Item>
        <Menu.Item>Group hotel booking</Menu.Item>





      </Menu.Dropdown>
    </Menu>
  );
}

export default ToggleMenue;
