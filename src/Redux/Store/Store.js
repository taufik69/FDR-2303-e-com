import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProductSlice/ProductSlice";
import addToSlice from "../AllSlice/AddToCart/AddtocartSlice.js";
export const store = configureStore({
  reducer: {
    cart: addToSlice,
    prouduct: ProductSlice,
  },
});
