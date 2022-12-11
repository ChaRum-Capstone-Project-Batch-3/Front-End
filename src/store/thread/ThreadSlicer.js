import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import ApiThread from "../../apis/Thread.api";

const initialState = {
  data: {
    thread: {},
    threads: [],
  },
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

export const getThread = createAsyncThunk("get thread", async (id) => {
  try {
    const res = await ApiThread.getThreadId(id);
    return res.data.data;
  } catch (err) {
    Swal.fire({ icon: "error", title: err.message });
    console.log(err.message);
  }
});

export const deleteThread = createAsyncThunk("delete thread", async (id) => {
  try {
    const res = await ApiThread.deleteThread(id);
    return res.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
    console.message(error.message);
  }
});

const threadSlice = createSlice({
  name: "thread",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllThread.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.threads = action.payload;
      })
      .addCase(getAllThread.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      .addCase(getThread.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.thread = action.payload;
      })
      .addCase(getThread.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      .addCase(deleteThread.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
        state.data.threads = state.data.threads.filter(
          (val) => val._id !== action.payload.data.thread._id
        );
        state.status = !state.status;
      })
      .addCase(deleteThread.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default threadSlice.reducer;
