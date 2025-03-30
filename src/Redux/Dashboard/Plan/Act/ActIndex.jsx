import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'Plan/ActIndex',
    async (_ , thunkAPI) => {
        const { rejectWithValue ,getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.get(`dashboard/plan/index` , {
                headers: {
                  Authorization: 'Bearer ' + auth.tokenAdmin
              }
              });
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