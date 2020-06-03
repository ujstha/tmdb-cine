import {
  MULTI_SEARCH_FETCH_SUCCESS,
  SEARCH_QUERY_EMPTY,
  MULTI_SEARCH_FETCH_ERROR,
  SINGLE_SEARCH_FETCH_SUCCESS,
  SINGLE_SEARCH_FETCH_ERROR,
} from '../constants/actionTypes';
import { fetchSearch } from '../utilities/httpUtils';

export const multiSearchAction = (query, page) => (dispatch) => {
  if (query !== '') {
    return fetchSearch('multi', query, page)
      .then((searchResults) =>
        dispatch({
          type: MULTI_SEARCH_FETCH_SUCCESS,
          payload: searchResults.data.results,
        })
      )
      .catch((error) =>
        dispatch({
          type: MULTI_SEARCH_FETCH_ERROR,
          error: error,
        })
      );
  } else {
    return dispatch({
      type: SEARCH_QUERY_EMPTY,
    });
  }
};

export const singleSearchAction = (type, query, page) => (dispatch) => {
  if (query !== '') {
    return fetchSearch(type, query, page)
      .then((searchResults) =>
        dispatch({
          type: SINGLE_SEARCH_FETCH_SUCCESS,
          payload: searchResults.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: SINGLE_SEARCH_FETCH_ERROR,
          error: error,
        })
      );
  } else {
    return dispatch({
      type: SEARCH_QUERY_EMPTY,
    });
  }
};
