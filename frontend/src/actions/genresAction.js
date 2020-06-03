import {
  TV_GENRES_FETCH_SUCCESS,
  MOVIE_GENRES_FETCH_SUCCESS,
  TV_GENRES_FETCH_ERROR,
  MOVIE_GENRES_FETCH_ERROR,
} from '../constants/actionTypes';
import { fetchGenre } from '../utilities/httpUtils';

export const genresAction = (type) => (dispatch) => {
  fetchGenre(type)
    .then((genres) =>
      type === 'tv'
        ? dispatch({
            type: TV_GENRES_FETCH_SUCCESS,
            payload: genres,
          })
        : dispatch({
            type: MOVIE_GENRES_FETCH_SUCCESS,
            payload: genres,
          })
    )
    .catch((error) =>
      type === 'tv'
        ? dispatch({
            type: TV_GENRES_FETCH_ERROR,
            error: error,
          })
        : dispatch({
            type: MOVIE_GENRES_FETCH_ERROR,
            error: error,
          })
    );
};
