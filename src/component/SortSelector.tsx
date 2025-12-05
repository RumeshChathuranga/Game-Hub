import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button >
            <Text fontWeight={'bold'}>Order BY: Relevance</Text>
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="Item 1">Item 1</Menu.Item>
              <Menu.Item value="Item 1">Item 2</Menu.Item>
              <Menu.Item value="Item 1">Item 3</Menu.Item>
              <Menu.Item value="Item 1">Item 4</Menu.Item>
              <Menu.Item value="Item 1">Item 5</Menu.Item>
              <Menu.Item value="Item 1">Item 6</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}
