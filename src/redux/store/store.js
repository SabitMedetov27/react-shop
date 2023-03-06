import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../slice/sidebarSlice";
import categorySlice from "../slice/categorySlice";
import productSlice from "../slice/productSlice";
import cartSlice from "../slice/cartSlice";
import searchSlice from "../slice/searchSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
    search: searchSlice,
  },
});

export default store;
