import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_REGISTER_PENDING,
  USER_LOGIN_PENDING,
} from '../constants/actionTypes';

const initialState = {
  isLoading: null,
  success: null,
  error: null,
  authToken: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
        success: null,
        error: null,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: null,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        success: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        success: null,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: null,
        authToken: action.payload,
        error: null,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        success: null,
        error: action.error,
      };
    default:
      return state;
  }
};
