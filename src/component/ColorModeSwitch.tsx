import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        marginX={2}
        onClick={toggleColorMode}
        variant="outline"
        size="md"
        aria-label="Toggle color mode"
      >
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  );
}
