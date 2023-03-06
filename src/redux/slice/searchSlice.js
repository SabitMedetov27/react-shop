import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";

const initialState = {
  searchProduct: [],
  searchProductsStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
        state.searchProductsStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
        state.searchProduct = action.payload;
        state.searchProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
        state.searchProductsStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncSearchProduct = createAsyncThunk(
  "product-search/fetch",
  async (searchTerm) => {
    const response = await fetch(`${BASE_URL}products/search?q=${searchTerm}`);
    const data = await response.json();

    return data.products;
  }
);

export const { serSearchTerm } = searchSlice.actions;
export const getSearchProduct = (state) => state.search.searchProduct;
export const getSearchProductStatus = (state) =>
  state.search.searchProductsStatus;
export default searchSlice.reducer;
