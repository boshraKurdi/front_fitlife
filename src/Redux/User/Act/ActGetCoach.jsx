import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetCoach = createAsyncThunk(
    'User/ActGetCoach',
    async (_ , thunkAPI) => {
        const { rejectWithValue , signal } = thunkAPI;
        try {
            const response = await axios.get(`user/coachs` , {
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
  export default ActGetCoach