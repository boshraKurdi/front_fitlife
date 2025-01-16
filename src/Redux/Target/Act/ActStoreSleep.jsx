import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActStoreSleep = createAsyncThunk(
    'Target/ActStoreSleep',
    async (sleep, thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.post(`target/storeSleep` ,{hours:sleep} , {
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
  export default ActStoreSleep