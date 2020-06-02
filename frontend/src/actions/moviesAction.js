import {
  MOVIES_FETCH_SUCCESS,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_ERROR,
  MOVIES_FETCH_ERROR,
} from '../constants/actionTypes';
import {
  fetchById,
  fetchByDiscover,
  fetchByCategory,
} from '../utilities/httpUtils';

export const moviesAction = (
  sort,
  releaseGte,
  primaryYear,
  genre,
  keywords,
  page
) => (dispatch) => {
  fetchByDiscover(sort, releaseGte, primaryYear, genre, keywords, page)
    .then((movies) =>
      dispatch({
        type: MOVIES_FETCH_SUCCESS,
        payload: movies,
      })
    )
    .catch((error) =>
      dispatch({
        type: MOVIES_FETCH_ERROR,
      })
    );
};

export const categoryMoviesAction = (category, page) => (dispatch) => {
  fetchByCategory('movie', category, page)
    .then((movies) =>
      dispatch({
        type: MOVIES_FETCH_SUCCESS,
        payload: movies,
      })
    )
    .catch((error) =>
      dispatch({
        type: MOVIES_FETCH_ERROR,
      })
    );
};

export const movieAction = (id) => (dispatch) => {
  fetchById('movie', id)
    .then((movie) =>
      dispatch({
        type: MOVIE_FETCH_SUCCESS,
        payload: movie,
      })
    )
    .catch((error) =>
      dispatch({
        type: MOVIE_FETCH_ERROR,
      })
    );
};
