import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActShow from './Act/ActShow'

const initialState = {
  meals: [] ,
  meal: {} ,
  message: '',
  id:0,
  loadingShow : 'idle',
  loading: 'idle',
  error:null
}

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.meals = [] 
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
      state.meals = action.payload.data
      state.id = action.payload.id
      state.message = action.payload.message
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
      state.meal = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loadingShow = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
})
// Action creators are generated for each case reducer function
export { ActIndex , ActShow } 
export const { CleanUp , GoalCleanUp } = mealSlice.actions
export default mealSlice.reducer