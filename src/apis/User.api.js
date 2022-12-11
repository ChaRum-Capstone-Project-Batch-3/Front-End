import axiosInstance from "../config/AxiosInstance";

const ApiUser = {
  async getAllUser(page) {
    try {
      const res = await axiosInstance.get(`admin/user/${page}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

export default ApiUser;
