import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export default function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={"10px"}
        gap="40px"
      >
        {isLoading && skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}
