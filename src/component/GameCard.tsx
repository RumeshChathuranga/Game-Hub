import { Card, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius={"10px"}>
      <Image src={game.background_image} />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};
