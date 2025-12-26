import type { GameQuery } from "@/App";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import type { Platform } from "./usePlatforms";


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
      apiClient
        .get<fetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
