import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActShow = createAsyncThunk(
    'Chat/ActShow',
    async (id , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , mode } = getState()
        try {
            const response = await axios.get(`chat/show/${id}?lang=${mode.language}` , {
                headers: {
                  Authorization: 'Bearer ' + auth.token
              }
              });
            return response.data[0]   
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