import * as api from '../api';
import { FETCH_GUEST } from '../constants/actionTypes';

export const getGuests = () => async (dispatch) => {
   try {
      const { data } = await api.fetchGuests();
      //   const data = eventDataMockUp;
      console.log(data);
      dispatch({ type: FETCH_GUEST, payload: data });
   } catch (error) {
      console.log(error);
   }
};
