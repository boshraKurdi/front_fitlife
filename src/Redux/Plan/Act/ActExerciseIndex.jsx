import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActExerciseIndex = createAsyncThunk(
    'Plan/ActExerciseIndex',
    async ({data , id} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.post(`plan/${id}/${data.day}/${data.week}/exercises`,{} ,{
                headers: {
                Authorization: 'Bearer ' + auth.token
            }});
            return response.data.data   
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActExerciseIndex