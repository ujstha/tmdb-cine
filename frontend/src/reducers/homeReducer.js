import {
  HOME_MOVIE_FETCH_SUCCESS,
  HOME_TV_FETCH_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  movieLoading: true,
  tvLoading: true,
  homeMovies: [],
  homeTvs: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        movieLoading: false,
        homeMovies: [...state.homeMovies, ...action.payload],
      };
    case HOME_TV_FETCH_SUCCESS:
      return {
        ...state,
        tvLoading: false,
        homeTvs: [...state.homeTvs, ...action.payload],
      };
    default:
      return state;
  }
};
