import {
  HOME_MOVIE_FETCH_SUCCESS,
  HOME_TV_FETCH_SUCCESS,
} from '../constants/actionTypes';
import { fetchByCategory } from '../utilities/httpUtils';

export const homeMoviesAction = (category) => (dispatch) => {
  fetchByCategory('movie', category)
    .then((homeMovies) =>
      dispatch({
        type: HOME_MOVIE_FETCH_SUCCESS,
        payload: homeMovies.data.results.map((assignCategory) => ({
          ...assignCategory,
          category: category,
        })),
      })
    )
    .catch((err) => console.log(err.response, 'errors'));
};

export const homeTvsAction = (category) => (dispatch) => {
  fetchByCategory('tv', category).then((homeTvs) =>
    dispatch({
      type: HOME_TV_FETCH_SUCCESS,
      payload: homeTvs.data.results.map((assignCategory) => ({
        ...assignCategory,
        category: category,
      })),
    })
  );
};
