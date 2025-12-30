import useGameQueryStore from "@/ store";
import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

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
          setSearchText(inputRef.current.value);
          navigate("/");
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
