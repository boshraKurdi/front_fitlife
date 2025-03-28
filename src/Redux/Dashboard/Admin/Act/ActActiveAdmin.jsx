import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActActiveAdmin = createAsyncThunk(
    'Admin/ActActiveAdmin',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.get(`dashboard/admin/activeAdmin/${id}`);
            return id
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActActiveAdmin