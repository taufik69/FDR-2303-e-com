import { createSlice } from "@reduxjs/toolkit";
const ApiStatus = {
  idle: "IDLE",
  loading: "LOADING",
  error: "ERROR",
};
const initialState = {
  data: [],
  status: ApiStatus.idle,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    setProduct: (state, payload) => {
      state.data = payload;
    },
    setStatus: (state, payload) => {
      state.status = payload;
    },
  },
});

// make thunk function

export const Fetcher = () => {
  return async function ProductFetcher(dispatch, getState) {
    try {
      dispatch(setStatus(ApiStatus.loading));
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch(setProduct(data.products));
    } catch (error) {
      dispatch(setStatus(ApiStatus.error));
    } finally {
      dispatch(setStatus(ApiStatus.idle));
    }
  };
};

export const { setProduct, setStatus } = productSlice.actions;

export default productSlice.reducer;
