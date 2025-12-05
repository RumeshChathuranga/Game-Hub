import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

export const PlatformSelector = ({
  onselectedPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          <Text fontWeight={"bold"}>
            {selectedPlatform?.name || "Platforms"}
          </Text>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                fontSize="md"
                onClick={() => onselectedPlatform(platform)}
                value={platform.slug}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
