import {
  SAVE_USER_MEDIA_PENDING,
  SAVE_USER_MEDIA_SUCCESS,
  SAVE_USER_MEDIA_ERROR,
  FETCH_USER_MEDIA_SUCCESS,
  FETCH_USER_MEDIA_ERROR,
  REMOVE_USER_MEDIA_SUCCESS,
  REMOVE_USER_MEDIA_ERROR,
} from '../constants/actionTypes';
import {
  addToFavorite,
  fetchFavorite,
  removeFavorite,
} from '../utilities/httpUtils';
import { message } from 'antd';

const key = 'updatable';

export const saveMediaAction = (
  mId,
  mType,
  mTitle,
  mBackdrop,
  mPoster,
  mYear
) => (dispatch) => {
  dispatch({
    type: SAVE_USER_MEDIA_PENDING,
  });
  message.loading({
    content: `Saving ${mTitle} to your favorite ${mType} list.....`,
    key,
  });
  return addToFavorite({
    mediaId: mId,
    mediaType: mType,
    mediaTitle: mTitle,
    mediaBackdrop: mBackdrop || mPoster,
    mediaPoster: mPoster || mBackdrop,
    mediaYear: mYear,
  })
    .then((media) => {
      dispatch({
        type: SAVE_USER_MEDIA_SUCCESS,
        payload: media.data,
      });
      setTimeout(
        () => message.success({ content: media.data, key, duration: 2 }),
        1500
      );
    })
    .catch((error) => {
      dispatch({
        type: SAVE_USER_MEDIA_ERROR,
        error: error.response.data,
      });
      setTimeout(
        () => message.error({ content: error.response.data, key, duration: 2 }),
        1500
      );
    });
};

export const fetchMediaAction = () => (dispatch) => {
  return fetchFavorite()
    .then((media) =>
      dispatch({
        type: FETCH_USER_MEDIA_SUCCESS,
        payload: media.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: FETCH_USER_MEDIA_ERROR,
        error: error.response.data,
      })
    );
};

export const removeMediaAction = (id, mTitle, mType) => (dispatch) => {
  message.loading({
    content: `Deleting ${mTitle} from your favorite ${mType} list.....`,
    key,
  });
  return removeFavorite(id)
    .then((media) => {
      dispatch({
        type: REMOVE_USER_MEDIA_SUCCESS,
        payload: media.data,
      });
      setTimeout(
        () => message.success({ content: media.data, key, duration: 2 }),
        1500
      );
    })
    .catch((error) => {
      dispatch({
        type: REMOVE_USER_MEDIA_ERROR,
        error: error.response.data,
      });
      setTimeout(
        () => message.error({ content: error.response.data, key, duration: 2 }),
        1500
      );
    });
};
