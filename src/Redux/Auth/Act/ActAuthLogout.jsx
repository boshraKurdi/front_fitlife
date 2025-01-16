import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGOUT } from "../../../Api/Api";
const ActAuthLogout = createAsyncThunk(
    'Auth/ActAuthLogout',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState , signal} = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.post(`${LOGOUT}` , {
                signal: signal,
              }, {
                headers: {
                  Authorization: 'Bearer ' + auth.token
              }
              });
            return response.data   
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
  export default ActAuthLogout