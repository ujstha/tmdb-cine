import React from 'react';
import { config } from '../../constants/config';
import NoPoster from '../../assets/images/no-poster-available.png';

export const backgroundImg = (result) => {
  const image =
    result.backdrop_path ||
    result.poster_path ||
    result.mediaBackdrop ||
    result.mediaPoster ||
    result.profile_path ||
    result.file_path;
  return image
    ? `url(${config.API_IMAGE_URL.original + image})`
    : `url(${NoPoster})`;
};
export const imageUrl = (result) =>
  `${
    config.API_IMAGE_URL.original + (result.poster_path || result.backdrop_path)
  }`;

export const SmallPosterImage = ({ result, className }) =>
  result.poster_path === null || result.profile_path === null ? (
    <img src={NoPoster} alt='No Poster' className={className} />
  ) : (
    <img
      src={`${config.API_IMAGE_URL.extra_small}${
        result.poster_path || result.profile_path
      }`}
      alt='Poster'
      className={className}
    />
  );

export const CreditPosterImage = ({ result, className }) =>
  result.profile_path !== null ? (
    <img
      className={className}
      src={config.API_IMAGE_URL.small_2 + result.profile_path}
      alt={result.name}
    />
  ) : (
    <div className={className}>
      <i className='fa fa-user'></i>
    </div>
  );

export const MediumPosterImage = ({ result, className }) => {
  const mediumImage =
    result.poster_path ||
    result.profile_path ||
    result.still_path ||
    result.mediaPoster ||
    result.mediaBackdrop;
  return mediumImage ? (
    <img
      src={`${config.API_IMAGE_URL.medium}${mediumImage}`}
      alt='Poster'
      className={className}
    />
  ) : (
    <img src={NoPoster} alt='No Poster' className={className} />
  );
};

export const OriginalPosterImage = ({ result, className }) => {
  const originalImg = result.poster_path || result.profile_path;
  return originalImg ? (
    <img
      src={`${config.API_IMAGE_URL.original}${originalImg}`}
      alt='Poster'
      className={className}
    />
  ) : (
    <img src={NoPoster} alt='No Poster' className={className} />
  );
};

export const BackdropImage = ({ result, className }) => {
  const backdropImg =
    result.backdrop_path || result.poster_path || result.profile_path;
  return backdropImg ? (
    <img
      src={`${config.API_IMAGE_URL.medium}${backdropImg}`}
      alt='Poster'
      className={className}
    />
  ) : (
    <img src={NoPoster} alt='No Poster' className={className} />
  );
};
