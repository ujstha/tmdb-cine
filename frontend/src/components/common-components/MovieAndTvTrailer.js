import React from 'react';
import { config } from '../../constants/config';
import Carousel from '../helper-components/Carousel';

export const MovieAndTvTrailer = ({ movieTv, title }) => {
  const { results } = movieTv.videos;
  return (
    results.length !== 0 && (
      <>
        <h3>{title}</h3>
        <div className='movieTv__single-trailer-container'>
          <Carousel xl={4} lg={3} md={2} sm={1}>
            {results
              .filter((filtered) => filtered.type === 'Trailer')
              .map((trailer) => (
                <div key={trailer.id} className='movieTv__single-trailer'>
                  <iframe
                    title={trailer.key}
                    src={config.API_TRAILER + trailer.key}
                    allowFullScreen
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </>
    )
  );
};
