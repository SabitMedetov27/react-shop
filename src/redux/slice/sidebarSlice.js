import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebar: false,
  },
  reducers: {
    setSidebarOn: (state) => {
      state.isSidebar = true;
    },
    setSidebarOff: (state) => {
      state.isSidebar = false;
    },
  },
});

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;
export const getSidebarStatus = (state) => state.sidebar.isSidebar;
export default sidebarSlice.reducer;
