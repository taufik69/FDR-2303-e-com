import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetProuduts: (state, payload) => {
      state.data = payload;
    },
  },
});


// make a thunk function for getting data 

// Action creators are generated for each case reducer function
export const { SetProuduts } = productSlice.actions;
export default productSlice.reducer;
