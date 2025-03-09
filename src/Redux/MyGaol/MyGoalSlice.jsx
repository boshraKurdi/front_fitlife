import { createSlice } from '@reduxjs/toolkit'
import ActGetMyGoal from './Act/ActGetMyGoal'
import ActStore from './Act/ActStore'
const initialState = {
  myGoals: [] ,
  message: '',
  alret: '',
  type: '',
  loading: 'idle',
  loadingStore : 'idle',
  error:null
}

export const myGoalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.loading= 'idle'
        state.error=null
        state.myGoals = [] 
    } ,
    ResetMessages:(state) =>{
      state.message = ''
    }
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActGetMyGoal.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetMyGoal.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.myGoals = action.payload.data
      state.alret = action.payload.message
    })
    builder.addCase(ActGetMyGoal.rejected , (state , action) => {
      state.loading = 'failed'
      console.log(action.payload.status) 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //store
    builder.addCase(ActStore.pending , (state) => {
      state.loadingStore = 'pending' 
      state.error = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded' 
      state.message = action.payload.data 
      state.type = action.payload.type 
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loadingStore = 'failed'
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
})
// Action creators are generated for each case reducer function
export { ActGetMyGoal , ActStore } 
export const { CleanUp , ResetMessages } = myGoalSlice.actions
export default myGoalSlice.reducer