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
  async UserTotal() {
    try {
      const res = await axiosInstance.get("admin/statistics/user");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async ThreadTotal() {
    try {
      const res = await axiosInstance.get("admin/statistics/thread");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async ReportTotal() {
    try {
      const res = await axiosInstance.get("admin/statistics/report");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ApiAuth;
