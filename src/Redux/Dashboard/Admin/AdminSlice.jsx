import { createSlice } from '@reduxjs/toolkit'
import ActGetRequestGoals from './Act/ActGetRequestGoals'
import ActRequestGoalConfirm from './Act/ActRequestGoalConfirm'
import ActRequestGoalUnConfirm from './Act/ActRequestGoalUnConfirm'
import ActPogress from './Act/ActPogress'
import ActGetRequestAdmin from './Act/ActGetRequestAdmin'
import ActGetRequestCoach from './Act/ActGetRequestCoach'
import ActActiveAdmin from './Act/ActActiveAdmin'
import ActActiveCoach from './Act/ActActiveCoach'
import ActNotActiveCoachAndAdmin from './Act/ActNotActiveCoachAndAdmin'
const initialState = {
  dataRequestGoal: [] ,
  loading: 'idle',
  progress:{},
  Radmin :[],
  Rcoach : [],
  message:'' ,
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
    } ,
    ResetMessages: (state) => {
      state.message = [] 
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
    //progress
    builder.addCase(ActPogress.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActPogress.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.progress = action.payload.data[0]
    })
    builder.addCase(ActPogress.rejected , (state , action) => {
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
        state.dataRequestGoal = state.dataRequestGoal.filter((el) => {
          if(el.id !== action.payload.data.id)
            return true
          else
            return false
          
        })
        state.message = action.payload.message
        state.type = action.payload.type
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
        state.dataRequestGoal = state.dataRequestGoal.filter((el) => {
          if(el.id !== action.payload.data.id)
            return true
          else
            return false
          
        })
        state.message = action.payload.message
        state.type = action.payload.type
      })
      builder.addCase(ActRequestGoalUnConfirm.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      // get coach request
      builder.addCase(ActGetRequestCoach.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActGetRequestCoach.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.Rcoach = action.payload.data
      })
      builder.addCase(ActGetRequestCoach.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      //get admin request
      builder.addCase(ActGetRequestAdmin.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActGetRequestAdmin.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.Radmin = action.payload.data
      })
      builder.addCase(ActGetRequestAdmin.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      // active coach
      builder.addCase(ActActiveCoach.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActActiveCoach.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.Rcoach = state.Rcoach.filter((el) => {
          if(el.id !== action.payload)
            return true
          else
            return false
          
        })
      })
      builder.addCase(ActActiveCoach.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      //active admin
      builder.addCase(ActActiveAdmin.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActActiveAdmin.fulfilled , (state, action) => {
        state.loading = 'succeeded' 
        state.Radmin = state.Radmin.filter((el) => {
          if(el.id !== action.payload)
            return true
          else
            return false
          
        })
      })
      builder.addCase(ActActiveAdmin.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      // not active admin and coach
      builder.addCase(ActNotActiveCoachAndAdmin.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActNotActiveCoachAndAdmin.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.Radmin = state.Radmin.filter((el) => {
          if(el.id !== action.payload)
            return true
          else
            return false
          
        })
        state.Rcoach = state.Rcoach.filter((el) => {
          if(el.id !== action.payload)
            return true
          else
            return false
          
        })
      })
      builder.addCase(ActNotActiveCoachAndAdmin.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
  
   }
   
})
// Action creators are generated for each case reducer function
export { ActNotActiveCoachAndAdmin , ActActiveAdmin , ActActiveCoach ,ActGetRequestAdmin , ActGetRequestCoach ,ActGetRequestGoals , ActRequestGoalConfirm , ActRequestGoalUnConfirm ,ActPogress } 
export const { CleanUp  , ResetMessages} = adminSlice.actions
export default adminSlice.reducer