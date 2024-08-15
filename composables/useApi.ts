import axios from "axios";

export const useApi = () => {
  const baseURL = "http://localhost:8000";
  return axios.create({ baseURL, headers: {} });
};
