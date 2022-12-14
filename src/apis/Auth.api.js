import axiosInstance from "../config/AxiosInstance";

const ApiAuth = {
  async login(data) {
    try {
      const res = await axiosInstance.post("user/login", data);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default ApiAuth;
