import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<fetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: any) => {
        // If request was cancelled, don't update state
        if (
          err instanceof CanceledError ||
          err?.name === "CanceledError" ||
          err?.code === "ERR_CANCELED"
        ) {
          return;
        }

        setError(err?.message ?? String(err));
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
