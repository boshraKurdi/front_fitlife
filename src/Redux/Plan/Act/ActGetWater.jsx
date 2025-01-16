import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetWater = createAsyncThunk(
    'Plan/ActGetWater',
    async (_ , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.get(`plan/water` ,{
                headers: {
                Authorization: 'Bearer ' + auth.token
            }});
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
  export default ActGetWater