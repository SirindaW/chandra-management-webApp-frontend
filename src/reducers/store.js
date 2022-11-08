import { configureStore } from '@reduxjs/toolkit';
import currentpageReducer from './currentpage';

export const store = configureStore({
  reducer: {
    //combine all reducer
    currentpage: currentpageReducer,
  },
});
