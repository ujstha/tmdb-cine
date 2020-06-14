import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_PENDING,
  USER_REGISTER_PENDING,
} from '../constants/actionTypes';
import { registerUser, loginUser } from '../utilities/httpUtils';

export const registerAction = (data) => (dispatch) => {
  dispatch({
    type: USER_REGISTER_PENDING,
  });
  return registerUser(data)
    .then((register) =>
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: register.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: USER_REGISTER_ERROR,
        error: error.response.data,
      })
    );
};

export const loginAction = (data) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_PENDING,
  });
  return loginUser(data)
    .then((login) =>
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: login.data.token,
      })
    )
    .catch((error) =>
      dispatch({
        type: USER_LOGIN_ERROR,
        error: error.response.data,
      })
    );
};
