import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

//to export all the values of the state
export type RootState = ReturnType<typeof store.getState>;

//to export all the dispatch function
export type AppDispatch = typeof store.dispatch;
