import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActRequestGoalConfirm = createAsyncThunk(
    'Admin/ActRequestGoalConfirm',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.post(`dashboard/admin/active_goal` , {user_id:id});
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
  export default ActRequestGoalConfirm