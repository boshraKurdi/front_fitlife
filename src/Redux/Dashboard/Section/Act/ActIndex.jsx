import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'Section/ActIndex',
    async (_ , thunkAPI) => {
        const { rejectWithValue  } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/section/index`);
            return response.data.data   
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