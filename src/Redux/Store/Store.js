import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProductSlice/ProductSlice";
export const store = configureStore({
  reducer: {
    prouduct: ProductSlice,
  },
});
