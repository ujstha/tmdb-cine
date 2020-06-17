import React from 'react';
import {
  OriginalPosterImage,
  backgroundImg,
} from '../helper-components/PosterImage';
import { GetYear, GetFullDate, GetRuntime } from '../../services/FormattedData';
import {
  SplittedTitleNames,
  TitleNames,
} from '../helper-components/TitleNames';
import { VoteAverage } from '../helper-components/VoteAverage';
import HeadTitle from '../helper-components/HeadTitle';
import { GenreLink } from '../helper-components/RouteLink';
import { imdbUrlInNewTab, goToRte } from '../../services/goToUrl';
import MovieAndTvSimilar from './MovieAndTvSimilar';
import { MovieAndTvImage } from './MovieAndTvImage';
import { MovieAndTvTrailer } from './MovieAndTvTrailer';
import { MovieAndTvCredit } from './MovieAndTvCredit';
import { MovieAndTvKeyword } from './MovieAndTvKeyword';
import { MovieMoreInfo } from '../movie-components/MovieMoreInfo';
import { TvMoreInfo } from '../tv-components/TvMoreInfo';

export const MovieAndTvSingle = ({
  movieTv,
  urlType,
  saveFavorite,
  bgColor,
  watch,
}) => (
  <>
    <HeadTitle
      title={`${TitleNames(movieTv)} ${GetYear(movieTv)}`}
      description={`Information about ${TitleNames(movieTv)}`}
    />
    <main
      className='movieTv__single-wrapper'
      style={{ backgroundImage: backgroundImg(movieTv) }}
    >
      <div className='movieTv__single-wrapper-overlay'></div>
      <div className='movieTv__single-container'>
        <div
          className='movieTv__single-detail-container'
          style={{ backgroundColor: bgColor }}
        >
          <div className='movieTv__single-img'>
            <OriginalPosterImage result={movieTv} />
          </div>
          <div className='movieTv__single-detail'>
            <div className='movieTv__single-title'>
              <span className='movieTv__single-title-sub'>
                <SplittedTitleNames result={movieTv} />{' '}
                <a href={`/${urlType}s/?release_year=${GetYear(movieTv)}`}>
                  ({GetYear(movieTv)})
                </a>
              </span>
              <div className='movieTv__single-tagline'>
                {movieTv.tagline ||
                  `${
                    movieTv.number_of_episodes
                      ? `${movieTv.number_of_episodes} episodes | `
                      : ''
                  }${
                    movieTv.number_of_seasons
                      ? `${movieTv.number_of_seasons} seasons`
                      : ''
                  }`}
              </div>
              <hr />
              <ul className='movieTv__single-genre'>
                {movieTv.genres.map((genre, index) => (
                  <GenreLink
                    key={genre.id}
                    id={genre.id}
                    index={index}
                    urlType={urlType}
                    length={movieTv.genres.length}
                    genre={genre.name}
                  />
                ))}
              </ul>
              <hr />
              <VoteAverage result={movieTv} className='movieTv__single-vote' />|
              <span
                className='movieTv__single-release'
                onClick={() => goToRte(urlType, movieTv)}
              >
                <i className='fa fa-clock-o mr-2' />
                {GetFullDate(movieTv)}
              </span>
              |
              <span className='movieTv__single-runtime'>
                {GetRuntime(movieTv)}
              </span>
            </div>
            <div className='movieTv__single-status'>{movieTv.status}</div>
            {movieTv.external_ids.imdb_id && (
              <div
                className='movieTv__single-imdb'
                onClick={() => imdbUrlInNewTab(movieTv)}
              >
                IMDb
              </div>
            )}
            <div className='movieTv__single-overview'>{movieTv.overview}</div>
            <div className='movieTv__single-facts row'>
              {urlType === 'movie' ? (
                <MovieMoreInfo
                  movieTv={movieTv}
                  saveFavorite={saveFavorite}
                  watch={watch}
                />
              ) : (
                <TvMoreInfo
                  movieTv={movieTv}
                  saveFavorite={saveFavorite}
                  watch={watch}
                />
              )}
              <MovieAndTvKeyword
                movieTv={movieTv}
                urlType={urlType}
                className='col-xl-5 col-lg-5 col-md-4'
              />
            </div>
          </div>
        </div>
        <div className='movieTv__single-more-detail'>
          <MovieAndTvCredit movieTv={movieTv.credits.cast} title='Casts' />
          <MovieAndTvCredit movieTv={movieTv.credits.crew} title='Crews' />
          <MovieAndTvImage movieTv={movieTv} title='Backdrops & Posters' />
          <MovieAndTvTrailer movieTv={movieTv} title='Videos & Trailers' />
          <MovieAndTvSimilar
            movieTv={movieTv.similar}
            title='You may also like'
            urlType={urlType}
          />
          <MovieAndTvSimilar
            movieTv={movieTv.recommendations}
            title='Recommended for you'
            urlType={urlType}
          />
        </div>
      </div>
    </main>
  </>
);
