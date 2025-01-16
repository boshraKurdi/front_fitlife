import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'User/ActIndex',
    async (_ , thunkAPI) => {
        const { rejectWithValue , signal } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/user/index` , {
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
  export default ActIndex