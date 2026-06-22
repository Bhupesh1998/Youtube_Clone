import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    hideDrawer: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleMenu, hideDrawer } = appSlice.actions;
export default appSlice.reducer;
