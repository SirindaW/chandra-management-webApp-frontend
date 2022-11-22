import * as api from '../api';
import { FETCH_EVENT, CHANGE_STATUS } from '../constants/actionTypes';
import { eventDataMockUp } from '../constants/text';

export const getEvents = () => async (dispatch) => {
   try {
      const { data } = await api.fetchEvents();
      //   const data = eventDataMockUp;

      dispatch({ type: FETCH_EVENT, payload: data });
   } catch (error) {
      console.log(error);
   }
};

export const changeEventStatus = (data) => async (dispatch) => {
   try {
      //   await api.updateEventStatus(data);

      dispatch({ type: CHANGE_STATUS, payload: data });
   } catch (error) {
      console.log(error);
   }
};
