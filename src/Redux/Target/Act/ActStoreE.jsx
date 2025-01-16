import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActStoreE = createAsyncThunk(
    'Target/ActStoreE',
    async ({calories , id , check}, thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState()
        try {
            const response = await axios.post(`target/storeExersice` , {calories:calories , plan_id:id , check:check} , {
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
  export default ActStoreE