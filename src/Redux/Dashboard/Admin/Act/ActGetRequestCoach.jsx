import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetRequestCoach = createAsyncThunk(
    'Admin/ActGetRequestCoach',
    async (id , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.get(`dashboard/admin/getRequestCoach`, {
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
  export default ActGetRequestCoach