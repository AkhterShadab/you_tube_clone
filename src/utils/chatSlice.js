import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessageToChat: (state, action) => {
      state.messages.splice(5, 1);
      state.messages = [action.payload, ...state.messages];
      //   state.messages.push(action.payload);
    },
  },
});

export const { addMessageToChat } = chatSlice.actions;
export default chatSlice.reducer;
