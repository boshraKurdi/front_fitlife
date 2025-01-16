import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActShow from './Act/ActShow'
const initialState = {
  myExercise: [] ,
  exercise:{},
  loading: 'idle',
  loadingShow: 'idle' ,
  loadingStore: 'idle' ,
  error:null
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    CleanUp: (state) => {
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
      state.myExercise = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //show
    builder.addCase(ActShow.pending , (state) => {
      state.loadingShow = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loadingShow = 'succeeded' 
      state.exercise = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loadingShow = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
  },
})
// Action creators are generated for each case reducer function
export { ActIndex , ActShow }
export const { CleanUp } = exerciseSlice.actions
export default exerciseSlice.reducer