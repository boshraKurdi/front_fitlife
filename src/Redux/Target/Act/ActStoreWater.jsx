import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActStoreWater = createAsyncThunk(
    'Target/ActStoreWater',
    async (data, thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , mode } = getState()
        try {
            const response = await axios.post(`target/storeWater?lang=${mode.language}` ,{water:data} , {
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
  export default ActStoreWater