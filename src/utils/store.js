import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chatSlices from "./chatSlices";

const store = configureStore({
  reducer: {
    app: appReducer,
    chat: chatSlices,
  },
});

export default store;
