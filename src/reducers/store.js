import { configureStore } from '@reduxjs/toolkit';
import auth from './auth.js';
import menu from './menu.js';
import events from './events.js';
import bookings from './booking.js';
import guests from './guest.js';

export const store = configureStore({
   reducer: {
      auth,
      menu,
      events,
      bookings,
      guests,
   },
});
