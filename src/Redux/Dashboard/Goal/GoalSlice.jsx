import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActShow from './Act/ActShow'
import ActDestroy from './Act/ActDestroy'
import ActStore from './Act/ActStore'
import ActUpdate from './Act/ActUpdate'
const initialState = {
  goals: [] ,
  goal: {} ,
  loading: 'idle',
  loadingStore: 'idle' ,
  loadingShow: 'idle' ,
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
      state.loadingShow = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loadingShow = 'succeeded' 
      state.goal = action.payload[0]
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loadingShow = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //destroy
    builder.addCase(ActDestroy.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActDestroy.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.goals = state.goals.filter((el) => {
        if(el.id !== action.payload)
          return true
        else
          return false
        
      })
    })
    builder.addCase(ActDestroy.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
     // store
     builder.addCase(ActStore.pending , (state) => {
      state.loadingStore = 'pending' 
      state.error = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded'
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loadingStore = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //update
    builder.addCase(ActUpdate.pending , (state) => {
      state.loadingStore = 'pending' 
      state.error = null
    })
    builder.addCase(ActUpdate.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded'
    })
    builder.addCase(ActUpdate.rejected , (state , action) => {
      state.loadingStore = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
})
// Action creators are generated for each case reducer function
export { ActIndex , ActShow , ActDestroy , ActStore , ActUpdate } 
export const { CleanUp , GoalCleanUp } = goalSlice.actions
export default goalSlice.reducer