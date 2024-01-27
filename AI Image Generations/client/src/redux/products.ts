import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [],
   names: [],
   searchList: [],
};
export const products = createSlice({
   name: "products",
   initialState,
   reducers: {
      getSearchList: (state, { payload }) => {
         state.searchList = payload;
         return state;
      },
      setProducts: (state, { payload }) => {
         state.products = payload;
         return state;
      },
   },
});

export const { setProducts, getSearchList } = products.actions;
