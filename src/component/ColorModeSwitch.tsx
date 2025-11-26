import { HStack, Switch, SwitchControl, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

export default function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch.Root
          onCheckedChange={toggleColorMode} colorPalette={"green"}
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label />
        </Switch.Root>
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
}
