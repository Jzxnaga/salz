import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const defaultState = {
    spinnerState:false,
    userId:'',
    userFullName:'',
    userType:'',
    statusLogin:0,
}


const pageSlice = createSlice({
    name:'posts',
    initialState:defaultState,

    reducers:{
      setStatusLogin(state,action){
        statusLogin=action.payload
      },
      setUserId(state,action){
        userId=action.payload
      },
      setUserFullName(state,action){
        userFullName=action.payload
      },
      setUserType(state,action){
        userType=action.payload
      }
    },
    extraReducers:{
      // [customerCreate.pending]:(state,action)=>{
      //   state.status = 'loading'
      // },
      // [customerCreate.fulfilled]:(state,action)=>{
      //   state.status = 'success'
      //   state.successNotification=action.payload
      //   state.profileCustomer=action.payload
      //   state.ID_Sec_Customer=action.payload.id
      //   state.process=1
      // },
      // [customerCreate.rejected]:(state,action)=>{
      //   console.log(action.payload)
      //   state.status = 'failed'
      //   state.errorNotification = action.payload
      // }
    }
  })
  
  export const applicationAction = pageSlice.actions;
  
  export default pageSlice.reducer