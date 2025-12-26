import axios, { type AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "54d859a65a8342c1bd41cacece47ec23",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosinstance
      .get<fetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
