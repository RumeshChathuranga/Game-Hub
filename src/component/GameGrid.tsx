import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { List,Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
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
