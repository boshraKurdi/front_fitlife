import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActGetCoach from './Act/ActGetCoach'
import ActShow from './Act/ActShow'
import ActProfile from './Act/ActProfile'
import ActDeleteAccount from './Act/ActDeleteAccount'
import ActEditProfile from './Act/ActEditProfile'
import ActEditScheduling from './Act/ActEditScheduling'
import ActSendRequestAdmin from './Act/ActSendRequestAdmin'
import ActSendRequestCoach from './Act/ActSendRequestCoach'
import ActProgressGoal from './Act/ActProgressGoal'

const initialState = {
  users: [] ,
  profile:{},
  coachs: [] ,
  user: {} ,
  datauser: {},
  message: "",
  progressGoal: {},
  type: "",
  loading: 'idle',
  error:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.users = [] 
    } ,
    ResetMessages:(state) =>{
      state.message = ''
    }
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
    //coachs
    builder.addCase(ActGetCoach.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetCoach.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.coachs = action.payload
    })
    builder.addCase(ActGetCoach.rejected , (state , action) => {
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
      state.user = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //profile 
    builder.addCase(ActProfile.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActProfile.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.profile = action.payload
    })
    builder.addCase(ActProfile.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //delete
    builder.addCase(ActDeleteAccount.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActDeleteAccount.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActDeleteAccount.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //edit profile
    builder.addCase(ActEditProfile.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActEditProfile.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.datauser = action.payload.data
      state.message = action.payload.message
      state.type = action.payload.type
    })
    builder.addCase(ActEditProfile.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //ActEditScheduling
    builder.addCase(ActEditScheduling.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActEditScheduling.fulfilled , (state , action ) => {
      state.loading = 'succeeded' 
      state.datauser = action.payload.data
      state.message = action.payload.message
      state.type = action.payload.type
    })
    builder.addCase(ActEditScheduling.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // send admin
    builder.addCase(ActSendRequestAdmin.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActSendRequestAdmin.fulfilled , (state , action ) => {
      state.loading = 'succeeded' 
      state.message = action.payload.message
    })
    builder.addCase(ActSendRequestAdmin.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //send coach
    builder.addCase(ActSendRequestCoach.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActSendRequestCoach.fulfilled , (state , action ) => {
      state.loading = 'succeeded' 
      state.message = action.payload.message
    })
    builder.addCase(ActSendRequestCoach.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //goal progress
    builder.addCase(ActProgressGoal.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActProgressGoal.fulfilled , (state , action ) => {
      state.loading = 'succeeded' 
      state.progressGoal = action.payload
    })
    builder.addCase(ActProgressGoal.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }

})
// Action creators are generated for each case reducer function
export { ActProgressGoal ,ActSendRequestAdmin , ActSendRequestCoach , ActIndex , ActGetCoach , ActShow, ActProfile ,  ActDeleteAccount , ActEditProfile , ActEditScheduling} 
export const { CleanUp ,ResetMessages } = userSlice.actions
export default userSlice.reducer