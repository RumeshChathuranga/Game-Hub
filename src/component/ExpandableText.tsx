import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summery = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summery}
      <Button
        onClick={() => setExpanded(!expanded)}
        size={"xs"}
        marginLeft={2}
        fontWeight={"bold"}
        variant={"outline"}
        colorPalette={"pink"}
        borderRadius={5}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
