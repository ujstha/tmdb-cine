import React from 'react';
import { MediumPosterImage } from '../helper-components/PosterImage';
import { VoteAverage } from '../helper-components/VoteAverage';
import { TitleNames } from '../helper-components/TitleNames';
import Carousel from '../helper-components/Carousel';

const MovieAndTvSimilar = ({ movieTv, title, urlType }) => {
  return movieTv && movieTv.results.length !== 0 ? (
    <div className='movieTv__single-similar-wrapper'>
      <h3>{title}</h3>
      <Carousel xl={9} lg={6} md={5} sm={3}>
        {movieTv.results.map((similar) => (
          <a
            href={`/${urlType}/${similar.id}/${TitleNames(similar)}`}
            key={similar.id}
            className='movieTv__single-similar'
          >
            <MediumPosterImage result={similar} />
            <div className='movieTv__single-similar-overlay'>
              <VoteAverage
                result={similar}
                className='movieTv__single-similar-vote'
              />
              <span className='movieTv__single-similar-title'>
                {TitleNames(similar)}
              </span>
            </div>
          </a>
        ))}{' '}
      </Carousel>
    </div>
  ) : (
    ''
  );
};

export default MovieAndTvSimilar;
