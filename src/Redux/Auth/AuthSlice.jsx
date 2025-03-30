import { createSlice } from '@reduxjs/toolkit'
import ActAuthLogin from './Act/ActAuthLogin'
import ActAuthSignUp from './Act/ActAuthSignUp'
import ActAuthUpdate from './Act/ActAuthUpdate'
import ActAuthLogout from './Act/ActAuthLogout'
import ActGetUser from './Act/ActGetUser'
import ActAuthLoginPanel from './Act/ActAuthLoginPanel'
import ActAuthLogoutPanel from './Act/ActAuthLogoutPanel'
const initialState = {
  user: {name:null , id:null} ,
  admin:{},
  type: null ,
  token: null ,
  tokenAdmin:null,
  message:"",
  loading: 'idle',
  error:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.loading = 'idle'
      state.error = null
    } ,
    LogOut: (state) =>{
      state.user = {} 
      state.token = null
      state.loading = 'idle'
      state.error = null
    } ,
    SetAuth: (state , action) =>{
      state.user = action.payload
    },
    SetPanel: (state , action) =>{
      state.admin = action.payload
    }
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActAuthSignUp.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthSignUp.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = action.payload.user
      state.token = action.payload.authorisation.token 
    })
    builder.addCase(ActAuthSignUp.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // login
    builder.addCase(ActAuthLogin.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLogin.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = action.payload.user
      state.token = action.payload.authorisation.token

    })
    builder.addCase(ActAuthLogin.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //login panel
    builder.addCase(ActAuthLoginPanel.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLoginPanel.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.admin = action.payload.user
      state.tokenAdmin = action.payload.authorisation.token
      state.message = action.payload.message

    })
    builder.addCase(ActAuthLoginPanel.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //update
    builder.addCase(ActAuthUpdate.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthUpdate.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActAuthUpdate.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //logout
    builder.addCase(ActAuthLogout.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLogout.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = {}
      state.token = null

    })
    builder.addCase(ActAuthLogout.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // LOGOUT PANEL
    builder.addCase(ActAuthLogoutPanel.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLogoutPanel.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.admin = {}
      state.tokenAdmin = null

    })
    builder.addCase(ActAuthLogoutPanel.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //user
    builder.addCase(ActGetUser.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetUser.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActGetUser.rejected , (state , action) => {
      state.loading = 'failed'
      state.user = {}
      state.token = null
    })
  },
})
// Action creators are generated for each case reducer function
export { ActAuthLogoutPanel ,ActAuthSignUp , ActAuthLogin , ActAuthUpdate , ActAuthLogout , ActGetUser , ActAuthLoginPanel }
export const { CleanUp , SetAuth ,LogOut , SetPanel } = authSlice.actions
export default authSlice.reducer