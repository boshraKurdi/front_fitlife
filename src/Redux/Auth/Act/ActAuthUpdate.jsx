import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UPDATE_AUTH } from "../../../Api/Api";
const ActAuthUpdate = createAsyncThunk(
    'Auth/ActAuthUpdate',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState , signal } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.post(`${UPDATE_AUTH}`, data , {
                headers: {
                  Authorization: 'Bearer ' + auth.token
              }
              }, {
                signal: signal,
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
  export default ActAuthUpdate