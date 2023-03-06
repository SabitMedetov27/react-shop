import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoriesProducts: [],
  categoriesProductsStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductsOfCategory.pending, (state, action) => {
        state.categoriesProductsStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
        state.categoriesProducts = action.payload;
        state.categoriesProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncProductsOfCategory.rejected, (state, action) => {
        state.categoriesProductsStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncProductsOfCategory = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const response = await fetch(`${BASE_URL}products/category/${category}`);
    const data = await response.json();
    return data.products;
    
  }
);

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();
    return data;
  }
);
export const getCategoryProductsStatus = (state) =>
  state.category.categoriesProductsStatus;
export const getAllProductsByCategory = (state) =>
  state.category.categoriesProducts;
export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
