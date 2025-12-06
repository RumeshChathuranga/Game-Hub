import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch: (searchText: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <InputGroup
        marginX={2}
        flex="1"
        startElement={<BsSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input
          ref={inputRef}
          borderRadius={20}
          variant={"subtle"}
          placeholder="Search Games..."
        />
      </InputGroup>
    </form>
  );
};
