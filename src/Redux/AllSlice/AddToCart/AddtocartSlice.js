import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const initialState = {
  CartTtem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
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
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
        toast.info(`${action.payload.title}  Again added Cart`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.CartTtem.push(temporary);
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
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
    RemoveItemCart: (state, action) => {
      const removeitem = state.CartTtem.filter(
        (item) => item.id !== action.payload.id,
      );
      state.CartTtem = removeitem;
      localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
      toast.error(`${action.payload.title} Removed To Cart`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    ProductIncrement: (state, action) => {
      const findIndex = state.CartTtem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findIndex >= 0) {
        state.CartTtem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
        toast.success(`${action.payload.title} increment`, {
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
    productDecrement: (state, action) => {
      const findIndex = state.CartTtem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.CartTtem[findIndex].cartQuantity > 1) {
        state.CartTtem[findIndex].cartQuantity -= 1;
        toast.error(`${action.payload.title} decresed`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
      }
    },
    getTotal: (state, action) => {
      const totalCart = state.CartTtem.reduce(
        (totalCart, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalCartPrice = cartQuantity * price;

          totalCart.totalAmount += Math.round(totalCartPrice);
          totalCart.totalItem += cartQuantity;
          return totalCart;
        },
        {
          totalAmount: 0,
          totalItem: 0,
        },
      );
      state.totoalCartItem = totalCart.totalItem;
      state.TotalAmount = totalCart.totalAmount;
    },
  },
});

export const {
  addtoCart,
  RemoveItemCart,
  ProductIncrement,
  productDecrement,
  getTotal,
} = AddtoSlice.actions;
export default AddtoSlice.reducer;
