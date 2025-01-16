import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetPlanForGoal = createAsyncThunk(
    'Plan/ActGetPlanForGoal',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/plan/plansForGoal/${id}`);
            return response.data.data   
        } catch (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActGetPlanForGoal