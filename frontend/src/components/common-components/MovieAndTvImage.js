import React from 'react';
import { PhotoSwipeGallery } from 'react-photoswipe-2';
import { config } from '../../constants/config';

const getThumbnailContent = (item) => {
  return <img src={item.thumbnail} alt='thumbnail' />;
};

export const MovieAndTvImage = ({ movieTv, title }) => {
  let images = [];
  const { backdrops, posters, profiles } = movieTv.images;
  const { tagged_images } = movieTv;
  const backProfile = backdrops || profiles;

  backProfile &&
    backProfile.map((backdrop) =>
      images.push({
        file_path: backdrop.file_path,
        width: backdrop.width,
        height: backdrop.height,
      })
    );
  posters &&
    posters.map((poster) =>
      images.push({
        file_path: poster.file_path,
        width: poster.width,
        height: poster.height,
      })
    );
  tagged_images &&
    tagged_images.results &&
    tagged_images.results.map((poster) =>
      images.push({
        file_path: poster.file_path,
        width: poster.width,
        height: poster.height,
      })
    );

  let allImages = images.map((image) => ({
    src: `${config.API_IMAGE_URL.original}${image.file_path}`,
    thumbnail: `${config.API_IMAGE_URL.medium}${image.file_path}`,
    w: image.width,
    h: image.height,
  }));

  return (
    allImages.length > 0 && (
      <>
        <h3>{title}</h3>
        <PhotoSwipeGallery
          items={allImages}
          thumbnailContent={getThumbnailContent}
        />
      </>
    )
  );
};
