import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
const initialState = {
  sections: [] ,
  section: {} ,
  loading: 'idle',
  loadingStore: 'idle' ,
  loadingShow: 'idle' ,
  error:null
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.sections = [] 
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
      state.sections = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
})
// Action creators are generated for each case reducer function
export { ActIndex } 
export const { CleanUp , GoalCleanUp } = sectionSlice.actions
export default sectionSlice.reducer