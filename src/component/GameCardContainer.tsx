import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      transition="transform .15s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
      }}
      overflow="hidden"
      borderRadius={"10px"}
    >
      {children}
    </Box>
  );
};
