import type { fetchResponse } from "@/services/api-client";
import APIClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import type Game from "@/entities/Game";
import useGameQueryStore from "@/store";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, // <-- Add this line
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
