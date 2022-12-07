import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiThread from "../../apis/Thread.api";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const getAllThread = createAsyncThunk("get all thread", async (page) => {
  try {
    const res = await ApiThread.getAllThread(page);
    return res.data.data.threads;
  } catch (err) {
    console.log(err.message);
  }
});

const threadSlice = createSlice({
  name: "thread",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllThread.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(getAllThread.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
  },
});

export default threadSlice.reducer;
