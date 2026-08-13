import axios, { type AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
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

  get = (id: number | string) => {
    return axiosinstance.get<T>(this.endpoint + '/'+ id).then(res => res.data);
  }
}

export default APIClient;
