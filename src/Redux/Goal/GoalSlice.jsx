import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActShow from './Act/ActShow'

const initialState = {
  goals: [] ,
  goal: {} ,
  loading: 'idle',
  error:null
}

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.goals = [] 
        state.loading = 'idle'
        state.error = null
    } ,
    GoalCleanUp: (state) => {
      state.goal = {} 
      state.loading = 'idle'
      state.error = null
  } ,
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActIndex.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActIndex.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.goals = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // show
    builder.addCase(ActShow.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.goal = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })

   }
})
// Action creators are generated for each case reducer function
export { ActIndex , ActShow } 
export const { CleanUp , GoalCleanUp } = goalSlice.actions
export default goalSlice.reducer