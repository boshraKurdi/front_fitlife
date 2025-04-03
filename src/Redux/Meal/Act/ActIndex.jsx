import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'Meal/ActIndex',
    async ({time} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.post(`plan/meals`
              , {
                'breakfast' : time.breakfast ,
                'lunch': time.lunch ,
                'dinner' : time.dinner ,
                'snack' : time.snack
              } , {
                headers: {
                Authorization: 'Bearer ' + auth.token
            }});
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
  export default ActIndex