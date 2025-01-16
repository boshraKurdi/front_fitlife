import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GYM } from "../../../Api/Api";
const ActIndex = createAsyncThunk(
    'Gym/ActIndex',
    async (_ , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.get(`${GYM}` , {
                headers: {
                  Authorization: 'Bearer ' + auth.token
              }
              });
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
  export default ActIndex