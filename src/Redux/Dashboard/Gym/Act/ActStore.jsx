import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActStore = createAsyncThunk(
    'Gym/ActStore',
    async (data , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.post(`dashboard/gym/store` , data);
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
  export default ActStore