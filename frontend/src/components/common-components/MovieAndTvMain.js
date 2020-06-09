import React from 'react';
import { MediumPosterImage } from '../helper-components/PosterImage';
import { GetYear } from '../../services/FormattedData';
import { TitleNames } from '../helper-components/TitleNames';
import { MovieTvLink, GenreLink } from '../helper-components/RouteLink';
import { VoteAverage } from '../helper-components/VoteAverage';

export const MovieAndTvMain = ({ movieTv, urlType, genres }) => {
  return (
    <div className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
      <MovieTvLink urlType={urlType} result={movieTv}>
        <div className='movieTv__main-img'>
          <MediumPosterImage result={movieTv} />
          <div className='movieTv__main-img-overlay'>
            <VoteAverage result={movieTv} className='movieTv__main-vote' />
          </div>
        </div>
        <div className='movieTv__main-title'>
          {TitleNames(movieTv)} ({GetYear(movieTv)})
        </div>
      </MovieTvLink>
      <small className='movieTv__main-genre'>
        <ul>
          {movieTv.genre_ids.map((id, index) => {
            const genre = genres
              .filter((genre) => genre.id === id)
              .map((genre) => {
                return genre.name;
              });
            return (
              genre.length !== 0 && (
                <GenreLink
                  key={id}
                  id={id}
                  urlType={urlType}
                  genre={genre[0]}
                  index={index}
                  length={movieTv.genre_ids.length}
                />
              )
            );
          })}
        </ul>
      </small>
    </div>
  );
};
