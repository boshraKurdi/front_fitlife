import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER } from "../../../Api/Api";
const ActAuthSignUp = createAsyncThunk(
    'Auth/ActAuthSignUp',
    async (data , thunkAPI , signal) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.post(`${REGISTER}`, data , {
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
  export default ActAuthSignUp