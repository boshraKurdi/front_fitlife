import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActShow = createAsyncThunk(
    'Goal/ActShow',
    async (id , thunkAPI) => {
        const { rejectWithValue , signal  } = thunkAPI;
        // const { auth } = getState();
        try {
            const response = await axios.get(`goal/${id}/show` , {
                signal: signal,
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
  export default ActShow