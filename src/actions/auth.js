import * as api from '../api';
import { authUrl, dashboardUrl } from '../constants/pathUrl';
import { AUTH, LOGOUT } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
   try {
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });

      navigate(dashboardUrl);
   } catch (error) {
      console.log(error);
   }
};

export const logout = (navigate) => async (dispatch) => {
   try {
      dispatch({ type: LOGOUT });
      navigate(authUrl);
   } catch (error) {
      console.log(error);
   }
};
