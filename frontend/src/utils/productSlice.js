import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productCategory: "",
    priceFilter: null, // { min: number, max: number } or null
    // other state properties...
  },
  reducers: {
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
  },
});

export const { setProductCategory, setPriceFilter } = productSlice.actions;

export default productSlice.reducer;
