import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActDestroy = createAsyncThunk(
    'Ingredient/ActDestroy',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.delete(`dashboard/ingredient/${id}/destroy`);
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
  export default ActDestroy