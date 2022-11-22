import * as api from '../api';
import { FETCH_BOOKING, CHANGE_BOOKING_STATUS } from '../constants/actionTypes';

export const getBookings = () => async (dispatch) => {
   try {
      const { data } = await api.fetchBookings();
      //   const data = eventDataMockUp;
      console.log(data);
      dispatch({ type: FETCH_BOOKING, payload: data });
   } catch (error) {
      console.log(error);
   }
};

export const changeBookingStatus = (data) => async (dispatch) => {
   try {
      await api.updateBookingStatus(data);

      dispatch({ type: CHANGE_BOOKING_STATUS, payload: data });
   } catch (error) {
      console.log(error);
   }
};
