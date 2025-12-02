import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      loaduser:(state,action)=>{
         state.data = action.payload
      },
      clearuser:(state,action)=>{
        state.data = null
      }
    }
})

export const {loaduser,clearuser} = userSlice.actions

export default userSlice.reducer
