import { createSlice } from "@reduxjs/toolkit";

const storage = sessionStorage.getItem("user");
const initialState = {
   user: storage ? JSON.parse(storage) : null,
};
export const users = createSlice({
   name: "users",
   initialState,
   reducers: {
      login: (state, { payload }) => {
         state.user = payload;
         return state;
      },
   },
});

export const { login } = users.actions;
