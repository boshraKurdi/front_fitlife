import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActProgressGoal = createAsyncThunk(
    'User/ActProgressGoal',
    async ({id , index} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.get(`user/progressGoal/${id}/${index}`,
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
  export default ActProgressGoal