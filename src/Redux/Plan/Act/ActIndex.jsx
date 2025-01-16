import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PLAN_INDEX } from "../../../Api/Api";
const ActIndex = createAsyncThunk(
    'Plan/ActIndex',
    async (_ , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`${PLAN_INDEX}`);
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