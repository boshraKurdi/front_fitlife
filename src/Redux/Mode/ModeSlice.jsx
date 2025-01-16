import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "light",
  open: false,
  type: "success",
  message: null,
  data:{day:1,week:1}
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    SetMode: (state, action) => {
      state.value = action.payload;
    },
    SetOpen: (state, action) => {
      state.open = !state.open;
      state.message = action.payload?.message;
      state.type = action.payload?.type;
    },
    SetData : (state , action)=>{
      state.data.day = action.payload.day
      state.data.week = action.payload.week
    }
  },
});
// Action creators are generated for each case reducer function
export const { SetMode, SetOpen , SetData} = modeSlice.actions;
export default modeSlice.reducer;
