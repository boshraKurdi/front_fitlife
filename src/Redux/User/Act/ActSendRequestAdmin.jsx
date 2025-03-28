import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActSendRequestAdmin = createAsyncThunk(
    'User/ActSendRequestAdmin',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.post(`user/send_request_admin` , data ,{
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
  export default ActSendRequestAdmin