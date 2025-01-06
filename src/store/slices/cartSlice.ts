import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: {
    productId: string;
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
