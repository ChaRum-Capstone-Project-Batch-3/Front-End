import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import ApiAuth from "../../apis/Auth.api";

const initialState = {
  data: [],
  statistik: {
    user: 0,
    thread: 0,
    report: 0,
  },
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

export const userStat = createAsyncThunk("get user stat", async () => {
  try {
    const res = await ApiAuth.UserTotal();
    return res.data.data;
  } catch (error) {
    Swal.fire({ icon: "error", title: error.message });
  }
});
export const threadStat = createAsyncThunk("get thread stat", async () => {
  try {
    const res = await ApiAuth.ThreadTotal();
    return res.data.data;
  } catch (error) {
    Swal.fire({ icon: "error", title: error.message });
  }
});
export const reportStat = createAsyncThunk("get report stat", async () => {
  try {
    const res = await ApiAuth.ReportTotal();
    return res.data.data;
  } catch (error) {
    Swal.fire({ icon: "error", title: error.message });
  }
});

const AuthSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      // login/signup
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // sum user
      .addCase(userStat.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.statistik.user = action.payload;
      })
      .addCase(userStat.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // sum thread
      .addCase(threadStat.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.statistik.thread = action.payload;
      })
      .addCase(threadStat.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // sum report
      .addCase(reportStat.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.statistik.report = action.payload;
      })
      .addCase(reportStat.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default AuthSlice.reducer;
