import { createSlice } from '@reduxjs/toolkit'
import ActStore from './Act/ActStore'
import ActStoreE from './Act/ActStoreE'
import ActStoreSleep from './Act/ActStoreSleep'
import ActStoreWater from './Act/ActStoreWater'
import ActProgress from './Act/Actprogress'
import ActAddDay from './Act/ActAddDay'
import ActNotAddDay from './Act/ActNotAddDay'

const initialState = {
  target: [] ,
  progress: [],
  date: '' ,
  type: '',
  message:'',
  count: -1 ,
  loading: 'idle',
  loadingE: 'idle',
  error:null ,
}

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.target = [] 
    } ,
    ResetMessages(state) {
      state.message = null;
      state.error = null;
    },
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActStore.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loading = 'succeeded'
      // state.message = action.payload.message
      // state.type = action.payload.type
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //store exersice
    builder.addCase(ActStoreE.pending , (state) => {
      state.loadingE = 'pending' 
      state.error = null
    })
    builder.addCase(ActStoreE.fulfilled , (state , action) => {
      state.loadingE = 'succeeded' 
      state.message = action.payload.message
      state.type = action.payload.type
    })
    builder.addCase(ActStoreE.rejected , (state , action) => {
      state.loadingE = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })

    //sleep
    builder.addCase(ActStoreSleep.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActStoreSleep.fulfilled , (state , action) => {
      state.loading = 'succeeded'
      state.message = action.payload.message
      state.type = action.payload.type 
    })
    builder.addCase(ActStoreSleep.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //water
    builder.addCase(ActStoreWater.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActStoreWater.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.message = action.payload.message
      state.type = action.payload.type
    })
    builder.addCase(ActStoreWater.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //get progress
    builder.addCase(ActProgress.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActProgress.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.progress = action.payload.data
      state.message = action.payload.message
    })
    builder.addCase(ActProgress.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //add day
    builder.addCase(ActAddDay.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAddDay.fulfilled , (state) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActAddDay.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // not add day
    builder.addCase(ActNotAddDay.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActNotAddDay.fulfilled , (state) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActNotAddDay.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })

   }
   
})
// Action creators are generated for each case reducer function
export { ActNotAddDay , ActStore , ActStoreE , ActStoreSleep , ActStoreWater ,ActProgress , ActAddDay } 
export const { CleanUp , ResetMessages } = targetSlice.actions
export default targetSlice.reducer