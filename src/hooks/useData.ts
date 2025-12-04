import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  results: T[];
}

const useGenres = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);

      apiClient
        .get<fetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err: any) => {
          // If request was cancelled, don't update state
          if (err instanceof CanceledError) {
            return;
          }

          setError(err?.message ?? String(err));
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useGenres;
