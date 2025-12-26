import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "./useData";
import apiClient from "@/services/api-client";


interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<fetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
