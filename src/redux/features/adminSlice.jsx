import { createSlice } from "@reduxjs/toolkit";

const localStorageUser =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const adminSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: localStorageUser,
      isAuthenticated: localStorageUser !== null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.data = action.payload;
      state.user.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user.data));
    },
    logout: (state) => {
      state.user.data = null;
      state.user.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = adminSlice.actions;

export const selectUser = (state) => state.user.user;

export default adminSlice.reducer;
