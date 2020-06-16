import React from 'react';
import { OriginalPosterImage } from '../helper-components/PosterImage';
import { TitleNames } from '../helper-components/TitleNames';
import { goToUrl } from '../../services/goToUrl';
import Carousel from '../helper-components/Carousel';

const Trending = ({ movieTv, urlType }) => {
  return (
    movieTv &&
    movieTv.length !== 0 && (
      <div className='trending__wrapper'>
        <Carousel xl={4} lg={3} md={3} sm={2}>
          {movieTv.map((trendingMovieTv) => (
            <div
              key={trendingMovieTv.id}
              className='trending__trendingMovieTv'
              onClick={() =>
                goToUrl(
                  `/${urlType}/${trendingMovieTv.id}/${TitleNames(
                    trendingMovieTv
                  )}`
                )
              }
            >
              <OriginalPosterImage
                result={trendingMovieTv}
                className='trending__trendingMovieTv-img'
              />
            </div>
          ))}
        </Carousel>
      </div>
    )
  );
};

export default Trending;
