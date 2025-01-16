import { createSlice } from '@reduxjs/toolkit'
import ActGetChat from './Act/ActGetChat'
import ActGetMessages from './Act/ActGetMessages'
import ActStore from './Act/ActStore'
import ActShow from './Act/ActShow'
import ActSendMessage from './Act/ActSendMessage' 

const initialState = {
  myChats: [] ,
  messages: [] ,
  myChat: {},
  loading: 'idle',
  loading2: 'idle' ,
  loading3: 'idle' ,
  error:null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.loading = 'idle'
      state.error = null
    } ,
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActGetChat.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetChat.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.myChats = action.payload
    })
    builder.addCase(ActGetChat.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //messages
    builder.addCase(ActGetMessages.pending , (state) => {
        state.loading3 = 'pending' 
        state.error = null
      })
      builder.addCase(ActGetMessages.fulfilled , (state , action) => {
        state.loading3 = 'succeeded' 
        state.messages = action.payload
      })
      builder.addCase(ActGetMessages.rejected , (state , action) => {
        state.loading3 = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      // store
      builder.addCase(ActStore.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActStore.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        window.location.pathname = 'services/chat/'+action.payload.id
      })
      builder.addCase(ActStore.rejected , (state , action) => {
        state.loading = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      //show
      builder.addCase(ActShow.pending , (state) => {
        state.loading2 = 'pending' 
        state.error = null
      })
      builder.addCase(ActShow.fulfilled , (state , action) => {
        state.loading2 = 'succeeded' 
        state.myChat = action.payload
      })
      builder.addCase(ActShow.rejected , (state , action) => {
        state.loading2 = 'failed' 
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload 
        }
      })
      builder.addCase(ActSendMessage.fulfilled , (state , action) => { 
        state.messages.push(action.payload.message)
      })
  },
})
// Action creators are generated for each case reducer function
export { ActGetChat , ActGetMessages , ActStore , ActShow , ActSendMessage}
export const { CleanUp } = chatSlice.actions
export default chatSlice.reducer