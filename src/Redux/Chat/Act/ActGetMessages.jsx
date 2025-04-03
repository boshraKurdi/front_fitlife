import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetMessages = createAsyncThunk(
    'Chat/ActGetMessages',
    async (id , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , mode } = getState()
        try {
            const response = await axios.get(`chat/messages/${id}?lang=${mode.language}` , {
                headers: {
                  Authorization: 'Bearer ' + auth.token
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
  export default ActGetMessages