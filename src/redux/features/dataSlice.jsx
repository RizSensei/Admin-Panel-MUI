import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState:{
        data:{

        }
    }
})

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;