import React from 'react';
import { config } from '../../constants/config';

export const MovieAndTvTrailer = ({ movieTv, title }) => {
  const { results } = movieTv.videos;
  return (
    results.filter((filtered) => filtered.type === 'Trailer').length !== 0 && (
      <>
        <h3>{title}</h3>
        <div className='movieTv__single-trailer-container'>
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
        </div>
      </>
    )
  );
};
