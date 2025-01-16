import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActShowPlan = createAsyncThunk(
    'Plan/ActShowPlan',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/plan/${id}/showPlan`);
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
  export default ActShowPlan