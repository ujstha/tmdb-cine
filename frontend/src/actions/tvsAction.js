import {
  TVS_FETCH_SUCCESS,
  TV_FETCH_SUCCESS,
  TV_SEASON_FETCH_SUCCESS,
  TVS_FETCH_ERROR,
  TV_FETCH_ERROR,
  TV_SEASON_FETCH_ERROR,
} from '../constants/actionTypes';
import {
  fetchById,
  fetchBySeasonNumber,
  fetchByCategory,
  fetchByDiscoverTv,
} from '../utilities/httpUtils';

export const tvsAction = (
  sort,
  releaseGte,
  primaryYear,
  genre,
  keywords,
  page
) => (dispatch) => {
  fetchByDiscoverTv(sort, releaseGte, primaryYear, genre, keywords, page)
    .then((tvs) =>
      dispatch({
        type: TVS_FETCH_SUCCESS,
        payload: tvs,
      })
    )
    .catch((error) =>
      dispatch({
        type: TVS_FETCH_ERROR,
        error: error,
      })
    );
};

export const categoryTvsAction = (category, page) => (dispatch) => {
  fetchByCategory('tv', category, page)
    .then((tvs) =>
      dispatch({
        type: TVS_FETCH_SUCCESS,
        payload: tvs,
      })
    )
    .catch((error) =>
      dispatch({
        type: TVS_FETCH_ERROR,
      })
    );
};

export const tvAction = (id) => (dispatch) => {
  fetchById('tv', id)
    .then((tv) =>
      dispatch({
        type: TV_FETCH_SUCCESS,
        payload: tv,
      })
    )
    .catch((error) =>
      dispatch({
        type: TV_FETCH_ERROR,
        error: error,
      })
    );
};

export const tvSeasonAction = (tvId, seasonNumber) => (dispatch) => {
  fetchBySeasonNumber(tvId, seasonNumber)
    .then((tvSeason) =>
      dispatch({
        type: TV_SEASON_FETCH_SUCCESS,
        payload: tvSeason,
      })
    )
    .catch((error) =>
      dispatch({
        type: TV_SEASON_FETCH_ERROR,
        error: error,
      })
    );
};
