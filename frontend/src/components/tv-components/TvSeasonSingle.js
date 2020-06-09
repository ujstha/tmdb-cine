import React from 'react';
import {
  OriginalPosterImage,
  backgroundImg,
} from '../helper-components/PosterImage';
import { GetYear, GetFullDate } from '../../services/FormattedData';
import {
  SplittedTitleNames,
  TitleNames,
  SplittedTitles,
} from '../helper-components/TitleNames';
import HeadTitle from '../helper-components/HeadTitle';
import { goToRte, prevSeason, nextSeason } from '../../services/goToUrl';
import { MovieAndTvCredit } from '../common-components/MovieAndTvCredit';
import { MovieAndTvTrailer } from '../common-components/MovieAndTvTrailer';
import TvSeasonEpisode from './TvSeasonEpisode';
import { TvSeasonEpisodeList } from './TvSeasonEpisodeList';

export const TvSeasonSingle = ({
  tvId,
  tvSeason,
  imdbId,
  totalSeason,
  title,
  withSpecial,
}) => {
  const urlType = 'tv';
  const withSpecialSeason = withSpecial === 'true' ? true : false;
  return (
    <>
      <HeadTitle
        title={`${title} - ${TitleNames(tvSeason)} ${GetYear(tvSeason)}`}
      />
      <main
        className='tvSeason__single-wrapper'
        style={{ backgroundImage: backgroundImg(tvSeason) }}
      >
        <div className='tvSeason__single-wrapper-overlay'></div>
        <div className='tvSeason__single-container'>
          <div className='tvSeason__single-detail-container'>
            <div className='tvSeason__single-img'>
              <OriginalPosterImage result={tvSeason} />
            </div>
            <div className='tvSeason__single-detail'>
              <div className='tvSeason__single-title'>
                <span className='tvSeason__single-title-sub'>
                  {SplittedTitles(title)}&nbsp;-&nbsp;
                  <SplittedTitleNames result={tvSeason} />{' '}
                  <a href={`/${urlType}s/?release_year=${GetYear(tvSeason)}`}>
                    ({GetYear(tvSeason)})
                  </a>
                </span>
                <div className='tvSeason__single-episode'>
                  <span
                    className='tvSeason__single-release'
                    onClick={() => goToRte(urlType, tvSeason)}
                  >
                    <i className='fa fa-clock-o mr-2' />
                    {GetFullDate(tvSeason)}
                  </span>{' '}
                  | {tvSeason.episodes.length} episodes
                </div>
              </div>
              <div
                className='tvSeason__single-previous'
                onClick={() =>
                  prevSeason(
                    tvId,
                    title,
                    imdbId,
                    totalSeason,
                    tvSeason,
                    withSpecial,
                    withSpecialSeason
                  )
                }
              >
                <i className='fa fa-angle-left' />
                &ensp;Previous Season
              </div>
              <div
                className='tvSeason__single-next'
                onClick={() =>
                  nextSeason(
                    tvId,
                    title,
                    imdbId,
                    totalSeason,
                    tvSeason,
                    withSpecial,
                    withSpecialSeason
                  )
                }
              >
                Next Season&ensp;
                <i className='fa fa-angle-right' />
              </div>
              <div className='tvSeason__single-overview'>
                {tvSeason.overview}
              </div>
              <TvSeasonEpisodeList
                tvSeason={tvSeason}
                className='tvSeason__single-facts'
              />
            </div>
          </div>
          <div className='tvSeason__single-more-detail'>
            <MovieAndTvCredit movieTv={tvSeason.credits.cast} title='Casts' />
            <MovieAndTvCredit movieTv={tvSeason.credits.crew} title='Crews' />
            <MovieAndTvTrailer movieTv={tvSeason} title='Videos & Trailers' />
            <TvSeasonEpisode
              tvSeason={tvSeason}
              title='Episodes'
              imdbId={imdbId}
            />
          </div>
        </div>
      </main>
    </>
  );
};
