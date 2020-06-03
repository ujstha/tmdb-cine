import {
  MULTI_SEARCH_FETCH_SUCCESS,
  SEARCH_QUERY_EMPTY,
  MULTI_SEARCH_FETCH_ERROR,
  SINGLE_SEARCH_FETCH_SUCCESS,
  SINGLE_SEARCH_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  searchResults: {},
  searchSuggestions: [],
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case MULTI_SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchSuggestions: action.payload,
      };
    case SINGLE_SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResults: action.payload,
      };
    case SINGLE_SEARCH_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case MULTI_SEARCH_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case SEARCH_QUERY_EMPTY:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
