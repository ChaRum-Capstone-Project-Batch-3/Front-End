import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import ApiUser from "../../apis/User.api";

const initialState = {
  data: {
    users: [],
    user: {},
  },
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const getAllUsers = createAsyncThunk("get all user", async (page) => {
  try {
    const res = await ApiUser.getAllUser(page);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
