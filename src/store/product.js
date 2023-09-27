import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    alter(state, action) {
      state.product = action.payload;
    },
    updateItems(state, action) {
      state.items = [...state.items, ...action.payload.products];
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
