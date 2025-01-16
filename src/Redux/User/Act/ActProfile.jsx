import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActProfile = createAsyncThunk(
    'User/ActProfile',
    async (_ , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.get(`user/profile`,
                {
                    headers: {
                      Authorization: "Bearer " + auth.token,
                    },
                  },);
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
  export default ActProfile