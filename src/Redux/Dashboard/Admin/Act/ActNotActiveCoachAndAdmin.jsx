import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActNotActiveCoachAndAdmin = createAsyncThunk(
    'Admin/ActNotActiveCoachAndAdmin',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.get(`dashboard/admin/notActiveCoachAndAdmin/${id}`);
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
  export default ActNotActiveCoachAndAdmin