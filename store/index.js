import {configureStore , createSlice, getDefaultMiddleware} from '@reduxjs/toolkit';
// import { R2_Asset_Api } from "../services/R2_asset"
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import  applicationReducer  from "./services/applicationSlice"
import pageSlice from './reducers/pageSlice';
import applicationSlice from './services/applicationSlice';

const store = configureStore({
    reducer: {
      page:pageSlice,
      // application:applicationReducer,
      application:applicationSlice
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(R2_Asset_Api.middleware)
    
});

setupListeners(store.dispatch)

export default store;