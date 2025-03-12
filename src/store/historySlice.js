import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data1: [],
  data2: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setChatHistory1: (state, action) => {
      state.data1 = [...state.data1, action.payload];
    },
    setChatHistory2: (state, action) => {
      state.data2 = [...state.data2, action.payload];
    }
  }
});

// Export actions
export const { setChatHistory1, setChatHistory2 } = historySlice.actions;

// Export reducer
export default historySlice.reducer;
