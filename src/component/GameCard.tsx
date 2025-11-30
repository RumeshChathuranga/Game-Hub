import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import type { Game } from "../hooks/useGames";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width={'300px'} overflow="hidden" borderRadius={"10px"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
