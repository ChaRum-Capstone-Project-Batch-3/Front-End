import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import ApiAuth from "../../apis/Auth.api";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const fetchAuth = createAsyncThunk("auth", async (data) => {
  try {
    const res = await ApiAuth.login(data);
    Cookies.set("token", res.data.data.token);
    Cookies.set("user", JSON.stringify(res.data.data.user));
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

const AuthSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default AuthSlice.reducer;
