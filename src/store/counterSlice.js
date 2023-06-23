import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count:0
  },
  reducers: {
    incriseByOne(state, action) {
        state.count = state.count + 1
        return state.count
    },
    resetCount(state,action){
state.count = 0
return state
    }
   
  },
});