import axios from "axios";
import Cookies from "js-cookie";

const config = {
  baseURL: "https://charum-api.nyakit.in/api/v1",
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;