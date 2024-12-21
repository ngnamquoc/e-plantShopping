import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      //extract data
      const { name, img, cost } = action.payload;
      //check existence and return the item
      const isExisted = state.items.items.find((item) => item.name == name);
      if (isExisted) {
        isExisted.quantity++;
      } else {
        state.items.push({ name, img, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      //overwrite the items array
      state.items = state.items.filter((item) => item.name != action.payload);
    },
    updateQuantity: (state, action) => {
      //extract data from action payload
      const { name, quantity } = action.payload;
      
      //find the item to be updated
      const updatedItem = state.items.find((item) => item.name == name);
      if (updatedItem) {
        updatedItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
