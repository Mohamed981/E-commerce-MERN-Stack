import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/product";

const initialState = {
  isCartOpen: false,
  items: [],
  totalprice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.totalprice = action.payload.price;
    },

    addToCart: (state: any, action) => {
      state.items = [...state.items, action.payload.item];
      state.totalprice += action.payload.item.price;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item: Product) => item._id !== action.payload.item._id
      );
      state.totalprice -= action.payload.item.price;
    },

    setIsCartOpen: (state:any) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartEmpty: (state) => {
      state.isCartOpen = false;
      state.items= [];
      state.totalprice= 0;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  setIsCartOpen,
  setCartEmpty,
} = cartSlice.actions;

export default cartSlice.reducer;
