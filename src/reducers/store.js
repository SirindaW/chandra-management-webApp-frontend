import { configureStore } from '@reduxjs/toolkit';
import auth from './auth.js';
import menu from './menu.js';

export const store = configureStore({
   reducer: {
      auth,
      menu,
   },
});
