import { createSlice } from "@reduxjs/toolkit";

const ApiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const initialState = {
  data: [],
  status: ApiStatus.IDLE,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetProuduts: (state, payload) => {
      state.data = payload;
    },
    setStatus: (state, payload) => {
      state.status = payload;
    },
  },
});

// make a thunk function for getting data

export const FetcherProduct = () => {
  return async function GetProduct(dispatch, getstate) {
    try {
      dispatch(setStatus(ApiStatus.LOADING));
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch(SetProuduts(data.products));
      dispatch(setStatus(ApiStatus.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(ApiStatus.ERROR));
    }
  };
};

// Action creators are generated for each case reducer function
export const { SetProuduts, setStatus } = productSlice.actions;
export default productSlice.reducer;
