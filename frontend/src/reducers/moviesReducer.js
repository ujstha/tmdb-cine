import {
  MOVIES_FETCH_SUCCESS,
  MOVIE_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR,
  MOVIE_FETCH_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  movies: {},
  movie: {},
  error: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: { ...action.payload.data, type: 'movie' },
      };
    case MOVIES_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case MOVIE_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
