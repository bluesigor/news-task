import { Sharable } from "../../core/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Sharable.Login = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
