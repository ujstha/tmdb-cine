import {
  SAVE_USER_MEDIA_PENDING,
  SAVE_USER_MEDIA_SUCCESS,
  SAVE_USER_MEDIA_ERROR,
  FETCH_USER_MEDIA_SUCCESS,
  FETCH_USER_MEDIA_ERROR,
  REMOVE_USER_MEDIA_ERROR,
  REMOVE_USER_MEDIA_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  isLoading: null,
  success: null,
  error: null,
  mediaLoading: true,
  mediaData: {},
  deleteSuccess: '',
};

export const saveMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_MEDIA_PENDING:
      return {
        ...state,
        isLoading: true,
        success: null,
        error: null,
      };
    case SAVE_USER_MEDIA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: null,
      };
    case SAVE_USER_MEDIA_ERROR:
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

export const fetchMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_MEDIA_SUCCESS:
      return {
        ...state,
        mediaLoading: false,
        mediaData: action.payload,
        error: null,
      };
    case FETCH_USER_MEDIA_ERROR:
      return {
        ...state,
        mediaLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const removeMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER_MEDIA_SUCCESS:
      return {
        ...state,
        deleteSuccess: action.payload,
        error: null,
      };
    case REMOVE_USER_MEDIA_ERROR:
      return {
        ...state,
        deleteSuccess: '',
        error: action.error,
      };
    default:
      return state;
  }
};
