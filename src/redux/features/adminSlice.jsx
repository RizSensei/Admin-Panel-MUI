import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name:"Dashboard",
    initialState: {
        projectTheme:{
            data: "lightTheme"
        }
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.projectTheme.data = state.projectTheme.data === "lightTheme" ? "lightTheme" : "darkTheme";
        }
    }
});

export const { toggleTheme } = adminSlice.actions;

export const selectTheme = (state) => state.Dashboard.projectTheme;

export default adminSlice.reducer;