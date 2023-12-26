import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../features/adminSlice';
import dataReducer from '../features/dataSlice'

export default configureStore({
    reducer: {
        user : adminReducer,
        data : dataReducer
    }
})