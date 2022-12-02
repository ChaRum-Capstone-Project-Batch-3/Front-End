import axios from "axios";

const config = {
  baseURL: "https://charum-api.nyakit.in/api/v1",
  headers: {
    Authorization: "Bearer ",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
