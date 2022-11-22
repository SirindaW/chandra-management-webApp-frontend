import { FETCH_GUEST } from '../constants/actionTypes';

const guests = (state = { guests: [] }, action) => {
   switch (action.type) {
      case FETCH_GUEST:
         return { ...state, guests: action.payload };
      default:
         return state;
   }
};

export default guests;
