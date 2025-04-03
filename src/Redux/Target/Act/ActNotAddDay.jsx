// ActAddDay
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActNotAddDay = createAsyncThunk(
    'Target/ActNotAddDay',
    async (_, thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.get(`target/notAddDay` , {
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
  export default ActNotAddDay