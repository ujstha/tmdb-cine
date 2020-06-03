import {
  PERSON_FETCH_SUCCESS,
  PERSON_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  person: {},
  error: false,
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload,
      };
    case PERSON_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
