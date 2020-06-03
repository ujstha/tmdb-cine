import {
  TVS_FETCH_SUCCESS,
  TV_FETCH_SUCCESS,
  TV_SEASON_FETCH_SUCCESS,
  TVS_FETCH_ERROR,
  TV_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  tvs: {},
  tv: {},
  tvSeason: {},
  error: null,
};

export const tvsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TVS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvs: { ...action.payload.data, type: 'tv' },
      };
    case TVS_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case TV_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tv: action.payload,
      };
    case TV_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const tvSeasonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TV_SEASON_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvSeason: action.payload,
      };
    default:
      return state;
  }
};
