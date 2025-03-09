import { createSlice } from '@reduxjs/toolkit'
import ActGetRequestGoals from './Act/ActGetRequestGoals'
import ActRequestGoalConfirm from './Act/ActRequestGoalConfirm'
import ActRequestGoalUnConfirm from './Act/ActRequestGoalUnConfirm'
const initialState = {
  dataRequestGoal: [] ,
  loading: 'idle',
  loadingShow: 'idle',
  loadingStore: 'idle',
  error:null ,
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.categories = [] 
    } 
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActGetRequestGoals.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetRequestGoals.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.dataRequestGoal = action.payload.data
    })
    builder.addCase(ActGetRequestGoals.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //confirm
    builder.addCase(ActRequestGoalConfirm.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActRequestGoalConfirm.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.dataRequestGoal = action.payload.data
      })
      builder.addCase(ActRequestGoalConfirm.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      //unconfirm
      builder.addCase(ActRequestGoalUnConfirm.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActRequestGoalUnConfirm.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.dataRequestGoal = action.payload.data
      })
      builder.addCase(ActRequestGoalUnConfirm.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
  
   }
   
})
// Action creators are generated for each case reducer function
export { ActGetRequestGoals , ActRequestGoalConfirm , ActRequestGoalUnConfirm } 
export const { CleanUp } = adminSlice.actions
export default adminSlice.reducer