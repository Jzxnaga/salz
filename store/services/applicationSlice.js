import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const axios = require('axios').default;

export const customerCreate = createAsyncThunk(
  '/api/customer/register',
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/customer/register',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const customerCheck = createAsyncThunk(
  '/api/customer/check',
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/customer/check',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const applicationCreate = createAsyncThunk(
  '/api/application/create',
  // async( body , {dispatch,getState}) =>{
  // referensi
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/application/create',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const findAssetLessorAsIdManyDb = createAsyncThunk(
  '/api/R2/findAssetLessorAsIdManyDb',
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/R2/findAssetLessorAsIdManyDb',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const findAssetLessorAsId = createAsyncThunk(
  '/api/R2/findAssetLessorAsId',
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/R2/findAssetLessorAsId',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const applicationAddMoreAsset = createAsyncThunk(
  '/api/Sec_R2/add',
  async (body, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.post('http://localhost:4000/api/Sec_R2/add',body)
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const checkingAppAfterAddMoreAsset = createAsyncThunk(
  '/api/application/findOneAppByID',
  async (paramsID, { getState , rejectWithValue }) => {
    const {assets} = getState()
    const { auth } = getState()
    const token = auth.token
    try {
      const result = await axios.get('http://localhost:4000/api/application/findOneAppByID',{ params: { id: paramsID } })
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
)

const applicationSlice = createSlice({
  name:'posts',
  initialState:{
    listBandingkan:[],
    status:null,
    errorNotification:null,
    successNotification:null,
    profileCustomer:null,
    assetsCalculatedPerbandingan:[],
    process:0,
    new_Sec_R2:null,
    ID_Sec_Customer:null,
    ID_Agen:null,
    ID_R2_Lessor:null,
    ID_Sec_Application_R2:null,
    jumlahItem:0,
    Sec_R2s:null
  },
  reducers:{
    setReset(state,action){
      state.status = null
      state.errorNotification = null
      state.successNotification = null
    },
    setProcess(state,action){
      state.process=1
    },
    setResetProcess(state,action){
      state.process=0
    },
    setResetProfile(state,action){
      state.profileCustomer=null
    },
    setIdAgen(state,action){
      state.ID_Agen = action.payload
    }
  },
  extraReducers:{
    [customerCreate.pending]:(state,action)=>{
      state.status = 'loading'
    },
    [customerCreate.fulfilled]:(state,action)=>{
      state.status = 'success'
      state.successNotification=action.payload
      state.profileCustomer=action.payload
      state.ID_Sec_Customer=action.payload.id
      state.process=1
    },
    [customerCreate.rejected]:(state,action)=>{
      console.log(action.payload)
      state.status = 'failed'
      state.errorNotification = action.payload
    },
    [customerCheck.pending]:(state,action)=>{
      state.status = 'loading'
    },
    [customerCheck.fulfilled]:(state,action)=>{
      state.status = 'success'
      state.successNotification=action.payload
      state.profileCustomer=action.payload
      state.ID_Sec_Customer=action.payload.id
      state.process=1
    },
    [customerCheck.rejected]:(state,action)=>{
      console.log(action.payload)
      state.status = 'failed'
      state.errorNotification = action.payload
    },
    [applicationCreate.pending]:(state,action)=>{
      state.status = 'loading'
      console.log('loading')
    },
    [applicationCreate.fulfilled]:(state,action)=>{
      state.status = 'success'
      state.ID_Sec_Application_R2 = action.payload.id
      state.process = 2
    },
    [applicationCreate.rejected]:(state,action)=>{
      console.log(action.payload)
      state.status = 'failed'
      state.errorNotification = action.payload
    },
    [findAssetLessorAsIdManyDb.pending]:(state,action)=>{
      state.status = 'loading'
      console.log('loading')
    },
    [findAssetLessorAsIdManyDb.fulfilled]:(state,action)=>{
      state.status = 'success'
      console.log(action.payload)
      state.assetsCalculatedPerbandingan = action.payload
    },
    [findAssetLessorAsIdManyDb.rejected]:(state,action)=>{
      console.log(action.payload)
      state.status = 'failed'
      state.errorNotification = action.payload
    },
    [findAssetLessorAsId.pending]:(state,action)=>{
      state.status = 'loading'
      console.log('loading')
    },
    [findAssetLessorAsId.fulfilled]:(state,action)=>{
      state.status = 'success'
      console.log(action.payload)
      state.R2Search = action.payload
    },
    [findAssetLessorAsId.rejected]:(state,action)=>{
      console.log(action.payload)
      state.status = 'failed'
      state.errorNotification = action.payload
    },
    [applicationAddMoreAsset.pending]:(state,action)=>{
      state.status = 'loading'
      console.log('loading')
    },
    [applicationAddMoreAsset.fulfilled]:(state,action)=>{
      state.status = 'success'
      console.log(action.payload)
      state.new_Sec_R2 = action.payload
    },
    [applicationAddMoreAsset.rejected]:(state,action)=>{
      state.status = 'failed'
      console.log(action.payload)
      state.errorNotification = action.payload.message
    },
    [checkingAppAfterAddMoreAsset.pending]:(state,action)=>{
      state.status = 'loading'
      console.log('loading')
    },
    [checkingAppAfterAddMoreAsset.fulfilled]:(state,action)=>{
      state.status = 'success'
      console.log('success')
      console.log(action.payload.Sec_R2s)
      state.Sec_R2s = action.payload.Sec_R2s
    },
    [checkingAppAfterAddMoreAsset.rejected]:(state,action)=>{
      state.status = 'failed'
      console.log(action.payload)
      state.errorNotification = action.payload.message
    },
  }
})

export const applicationAction = applicationSlice.actions;

export default applicationSlice.reducer