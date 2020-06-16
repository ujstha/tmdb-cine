import React from 'react';
import Slider from 'react-slick';
import { Tooltip } from 'antd';
import { IconButton } from '@material-ui/core';
import { goToUrl } from '../../services/goToUrl';
import { MediumPosterImage } from '../helper-components/PosterImage';

export const UserFavorite = ({
  favoriteMedia,
  parentRef,
  sliderRef,
  title,
  filterType,
  remove,
}) => {
  const settings = {
    dots: false,
    infinite:
      favoriteMedia.filter(
        (filterMedia) => filterMedia.mediaType === filterType
      ).length < 5
        ? false
        : true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div ref={parentRef} className='user__favorite-container'>
      <h3>{title}</h3>
      <Slider {...settings} ref={sliderRef}>
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
      </Slider>
    </div>
  );
};
