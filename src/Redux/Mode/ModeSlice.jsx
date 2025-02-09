import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "light",
  open: false,
  type: "success",
  message: null,
  data:{day:1,week:1} ,
  data_meal:{day:1,week:1} , 
  language: 'en'
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
    } ,
    SetDataMeal : (state , action)=>{
      state.data_meal.day = action.payload.day
      state.data_meal.week = action.payload.week
    }
    ,
    SetLanguage : (state )=>{
     state.language = state.language === 'en' ? 'ar' : 'en'
    }
  },
});
// Action creators are generated for each case reducer function
export const { SetMode, SetOpen , SetData , SetDataMeal , SetLanguage} = modeSlice.actions;
export default modeSlice.reducer;
