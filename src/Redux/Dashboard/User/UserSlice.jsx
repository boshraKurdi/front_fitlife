import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActShow from './Act/ActShow'

const initialState = {
  users: [] ,
  user: {} ,
  loading: 'idle',
  error:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.goals = [] 
    } ,
    GoalCleanUp: (state) => {
      state.goal = {} 
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
      state.users = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //show
    builder.addCase(ActShow.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = action.payload.data
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
export { ActIndex , ActShow} 
export const { CleanUp } = userSlice.actions
export default userSlice.reducer