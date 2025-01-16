import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActPayment from './Act/ActPayment'

const initialState = {
  services: [] ,
  loading: 'idle',
  error:null
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.services = [] 
    } 
    ,
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActIndex.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActIndex.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.services = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //payment
    builder.addCase(ActPayment.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActPayment.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActPayment.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
   
})
// Action creators are generated for each case reducer function
export { ActIndex , ActPayment }
export const { CleanUp } = serviceSlice.actions
export default serviceSlice.reducer