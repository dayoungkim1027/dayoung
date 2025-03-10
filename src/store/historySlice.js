import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setChatHistory: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  }
});

// Export actions
export const { setChatHistory } = historySlice.actions;

// Export reducer
export default historySlice.reducer;
