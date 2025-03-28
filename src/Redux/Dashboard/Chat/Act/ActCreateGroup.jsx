import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActCreateGroup = createAsyncThunk(
    'Chat/ActCreateGroup',
    async ({data , name} , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.post(`chat/CreateGroup` , {user:data , name:name} , {
                headers: {
                  Authorization: 'Bearer ' + auth.tokenAdmin
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
  export default ActCreateGroup