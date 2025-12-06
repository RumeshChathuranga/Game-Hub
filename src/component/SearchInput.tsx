import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup marginX={4} flex="1" startElement={<BsSearch />} endElement={<Kbd>⌘K</Kbd>}>
    <Input borderRadius={20} variant={"subtle"} placeholder="Search Games..." />
  </InputGroup>
  );
};
