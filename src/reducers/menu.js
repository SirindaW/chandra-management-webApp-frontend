import { OPEN, CLOSE, SWITCH } from '../constants/actionTypes';

const menuReducer = (state = { isMenu: true }, action) => {
   switch (action.type) {
      case CLOSE:
         return { isMenu: false };
      case SWITCH:
         return { isMenu: !state.isMenu };
      default:
         return state;
   }
};

export default menuReducer;
