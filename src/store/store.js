import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import geminiReducer from './geminiSlice';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menuStatus: menuReducer,
    geminiAnswer: geminiReducer,
    history: historyReducer,
  },
});

export default store;