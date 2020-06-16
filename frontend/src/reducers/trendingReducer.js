import {
  TRENDING_FETCH_SUCCESS,
  TRENDING_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  trending: {},
  error: false,
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trending: { ...action.payload.data, type: 'movie' },
      };
    case TRENDING_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
