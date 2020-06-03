import {
  TV_GENRES_FETCH_SUCCESS,
  MOVIE_GENRES_FETCH_SUCCESS,
  TV_GENRES_FETCH_ERROR,
  MOVIE_GENRES_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  tvGenres: {},
  movieGenres: {},
  error: null,
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case TV_GENRES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvGenres: { ...action.payload.data, type: 'tv' },
      };
    case TV_GENRES_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case MOVIE_GENRES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieGenres: { ...action.payload.data, type: 'movie' },
      };
    case MOVIE_GENRES_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
