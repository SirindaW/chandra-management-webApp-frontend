import { CHANGE_STATUS, FETCH_EVENT } from '../constants/actionTypes';

const events = (state = { events: [] }, action) => {
   switch (action.type) {
      case FETCH_EVENT:
         return { ...state, events: action.payload };
      case CHANGE_STATUS:
         return { ...state, events: state.events.map((e) => (e._id === action.payload.id ? { ...e, status: action.payload.status } : e)) };
      default:
         return state;
   }
};

export default events;
