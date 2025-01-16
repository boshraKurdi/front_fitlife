import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActPayment = createAsyncThunk(
  "Service/ActPayment",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState();
    try {
      const response = await axios.post(
        `userService/store/1`, data ,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        },
        {
          signal: signal,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default ActPayment;
