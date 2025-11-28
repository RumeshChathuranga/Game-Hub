import { List,Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
    <Text>{error}</Text>
      <List.Root>
        {games.map((game) => (
          <List.Item key={game.id}>{game.name}</List.Item>
        ))}
      </List.Root>
    </>
  );
}
