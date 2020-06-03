import {
  PERSON_FETCH_SUCCESS,
  PERSON_FETCH_ERROR,
} from '../constants/actionTypes';
import { fetchById } from '../utilities/httpUtils';

export const personAction = (id) => (dispatch) => {
  fetchById('person', id)
    .then((person) =>
      dispatch({
        type: PERSON_FETCH_SUCCESS,
        payload: person,
      })
    )
    .catch((error) =>
      dispatch({
        type: PERSON_FETCH_ERROR,
      })
    );
};
