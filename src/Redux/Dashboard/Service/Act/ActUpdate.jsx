import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActUpdate = createAsyncThunk(
    'Service/ActUpdate',
    async ({data , id} , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.post(`dashboard/service/${id}/update` , data);
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
  export default ActUpdate