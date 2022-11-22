import { FETCH_BOOKING, CHANGE_BOOKING_STATUS } from '../constants/actionTypes';

const bookings = (state = { bookings: [] }, action) => {
   switch (action.type) {
      case FETCH_BOOKING:
         return { ...state, bookings: action.payload };
      case CHANGE_BOOKING_STATUS:
         return { ...state, bookings: state.bookings.map((e) => (e._id === action.payload.id ? { ...e, status: action.payload.status } : e)) };
      default:
         return state;
   }
};

export default bookings;
