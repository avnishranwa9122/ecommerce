import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalAmount += +product.price;
    },
    remove(state, action) {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      state.items = state.items.filter((item) => item.id !== productId);

      state.totalAmount -= +product.price * +product.quantity;
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== productId);
      }

      state.totalAmount -= +existingItem.price;
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      existingItem.quantity++;
      state.totalAmount += +existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
