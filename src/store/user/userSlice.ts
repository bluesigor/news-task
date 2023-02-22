import { Sharable } from "../../core/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Sharable.User = {
  username: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword, setUsername } = userSlice.actions;

export default userSlice.reducer;
