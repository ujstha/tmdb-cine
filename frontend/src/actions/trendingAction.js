import {
  TRENDING_FETCH_SUCCESS,
  TRENDING_FETCH_ERROR,
} from '../constants/actionTypes';
import { fetchByTrending } from '../utilities/httpUtils';

export const trendingAction = () => (dispatch) => {
  fetchByTrending()
    .then((trending) =>
      dispatch({
        type: TRENDING_FETCH_SUCCESS,
        payload: trending,
      })
    )
    .catch((error) =>
      dispatch({
        type: TRENDING_FETCH_ERROR,
      })
    );
};
