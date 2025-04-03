import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActShow = createAsyncThunk(
    'MyPlan/ActShow',
    async ({id , data} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth  } = getState()
        try {
            const response = await axios.post(`plan/${id}/show`, {type: data.one , number_week:data.two } ,  {
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
  export default ActShow