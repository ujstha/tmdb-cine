import React from 'react';
import { Tooltip } from 'antd';
import { IconButton } from '@material-ui/core';
import { goToUrl } from '../../services/goToUrl';
import { MediumPosterImage } from '../helper-components/PosterImage';
import Carousel from '../helper-components/Carousel';

export const UserFavorite = ({ favoriteMedia, title, filterType, remove }) => {
  return (
    <div className='user__favorite-container'>
      <h3>{title}</h3>
      <Carousel
        infinite={
          favoriteMedia.filter(
            (filterMedia) => filterMedia.mediaType === filterType
          ).length < 5
            ? false
            : true
        }
        xl={5}
        lg={3}
        md={3}
        sm={2}
      >
        {favoriteMedia
          .filter((filteredMedia) => filteredMedia.mediaType === filterType)
          .map((favorite, index) => {
            const { _id, mediaId, mediaTitle, mediaType } = favorite;
            return (
              <div
                key={index}
                className='user__favorite-list'
                onClick={() =>
                  goToUrl(`/${filterType}/${mediaId}/${mediaTitle}`)
                }
              >
                <MediumPosterImage
                  result={favorite}
                  className='user__favorite-img'
                />
                <Tooltip placement='top' title='Remove from favorite'>
                  <IconButton
                    onClick={() => {
                      remove(_id, mediaTitle, mediaType);
                      setTimeout(() => goToUrl(`/user/dashboard`), 2000);
                    }}
                  >
                    <i className='material-icons'>delete</i>
                  </IconButton>
                </Tooltip>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
