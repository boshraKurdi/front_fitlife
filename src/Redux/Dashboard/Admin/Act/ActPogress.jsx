import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActPogress = createAsyncThunk(
    'Admin/ActPogress',
    async (id , thunkAPI) => {
        const { rejectWithValue ,getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.get(`dashboard/user/progress`, {
                headers: {
                  Authorization: 'Bearer ' + auth.tokenAdmin
              }
              });
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
  export default ActPogress