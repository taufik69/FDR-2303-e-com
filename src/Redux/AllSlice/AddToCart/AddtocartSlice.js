import { createSlice } from "@reduxjs/toolkit";
import { toast ,Bounce } from "react-toastify";

const initialState = {
  CartTtem: [],
  totoalCartItem: 0,
  TotalAmount: 0,
};

export const AddtoSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.CartTtem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findIndex >= 0) {
        state.CartTtem[findIndex].cartQuantity += 1;
      } else {
        state.CartTtem.push({ ...action.payload, cartQuantity: 1 });
        toast(`${action.payload.title} Added to Cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  },
});

export const { addtoCart } = AddtoSlice.actions;
export default AddtoSlice.reducer;
