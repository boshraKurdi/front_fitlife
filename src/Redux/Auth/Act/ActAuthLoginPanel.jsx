import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActAuthLoginPanel = createAsyncThunk(
    'Auth/ActAuthLoginPanel',
    async (data , thunkAPI) => {
        const { rejectWithValue , signal } = thunkAPI;
        try {
            const response = await axios.post(`dashboard/auth/login`, data , {
                signal: signal,
              });
            return response.data   
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActAuthLoginPanel