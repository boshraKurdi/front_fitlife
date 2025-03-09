import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetRequestGoals = createAsyncThunk(
    'Admin/ActGetRequestGoals',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/admin/getRequestGoals`);
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
  export default ActGetRequestGoals