import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActEditScheduling = createAsyncThunk(
    'User/ActEditScheduling',
    async ({days} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , mode } = getState();
        try {
            const response = await axios.post(`user/editScheduling?lang=${mode.language}` , {days:days} , {
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
  export default ActEditScheduling