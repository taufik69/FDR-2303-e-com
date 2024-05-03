import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../ReduxAllSlice/ProductSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
