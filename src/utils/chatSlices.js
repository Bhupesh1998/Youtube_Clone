import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./contants";

const chatSlices = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_OFFSET, 1);
      // state.messages.push(action.payload);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addmessages } = chatSlices.actions;
export default chatSlices.reducer;
