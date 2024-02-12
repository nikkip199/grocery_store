import { Menu, Input, Button, Stack, ScrollArea } from "@mantine/core";

import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
// import CheckboxCard from "./CheckboxCard";

const ButtonDropCategory = ({ category, title, num}) => {
  const [selected, setSelected] = useState("");
  console.log("selected", selected);
  return (
    <>
      <Menu>
        <Menu.Target>
          <Button
            w={num}
            m={5}
            style={{
              borderColor: "#7e7e7e",
              backgroundColor: "#fff",
              color: "#7e7e7e",
            }}
          >
            {title || "Title"}
            <IconChevronDown />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <ScrollArea h={250} style={{ color: "#80B82D" }} type="always">
            <Menu.Item>
              <Input />
            </Menu.Item>
            {category &&
              category?.map((item) => (
                <Menu.Item
                  key={item.id}
                  value={item.id}
                  onClick={(e) => {setSelected(e.target.value);}}
                >
                  <Stack
                    style={{
                      fontFamily: "Lato,sans-serif",
                      fontSize: "14px",
                      color: "#7e7e7e",
                      fontWeight: "600px",
                    }}
                  >
                    
                    {item.title || item.name}
                  </Stack>
                </Menu.Item>
              ))}
          </ScrollArea>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default ButtonDropCategory;
