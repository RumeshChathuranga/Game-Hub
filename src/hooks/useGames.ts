import type { GameQuery } from "@/App";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // any of the values in gameQuery changes, the queryKey changes
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
