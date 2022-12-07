import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
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
    return res.data.data.token;
  } catch (err) {
    console.log(err);
    throw err;
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
        state.err = action.error.message;
      });
  },
});

export default AuthSlice.reducer;
