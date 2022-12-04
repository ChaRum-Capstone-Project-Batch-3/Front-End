import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiTopic from "../../apis/Topic.api";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const getAllTopic = createAsyncThunk("get all topic", async () => {
  try {
    const res = await ApiTopic.getAllTopic();
    return res.data.data.topics;
  } catch (err) {
    console.log(err.message);
  }
});

export const deleteTopic = createAsyncThunk("delete topic", async (id) => {
  try {
    const res = await ApiTopic.deleteTopic(id);
    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
});

export const createTopic = createAsyncThunk("create topic", async (data) => {
  try {
    const res = await ApiTopic.createTopic(data);
    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
});

const topicSlice = createSlice({
  name: "topic",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(getAllTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      .addCase(deleteTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(deleteTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(createTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      });
  },
});

export default topicSlice.reducer;
