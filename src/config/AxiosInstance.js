import axios from "axios";

import { requestHandler } from "./Interceptor";

const config = {
  baseURL: "https://charum-api.nyakit.in/api/v1",
  Headers: {
    "content-type": "multipart/form-data",
  },
};
const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
