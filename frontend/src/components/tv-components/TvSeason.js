import React from 'react';
import { GetYear } from '../../services/FormattedData';
import { openTvSeason } from '../../services/goToUrl';

export const TvSeason = ({ tv, className }) =>
  tv && tv.seasons
    ? tv.seasons.length !== 0 && (
        <div className={className}>
          <div className='movieTv__single-season'>
            <span>Seasons</span>
            <hr />
            <div>
              {tv.seasons.map((season, index) => (
                <span key={index}>
                  <div
                    onClick={() =>
                      openTvSeason(
                        tv,
                        tv.seasons.find(
                          (findSeason) => findSeason.season_number === 0
                        )
                          ? 'true'
                          : 'false',
                        season
                      )
                    }
                  >
                    Season {season.season_number}&emsp;(
                    {season.air_date ? GetYear(season) : '----'})
                    <span>{season.episode_count}</span>
                  </div>
                  {index + 1 < tv.seasons.length ? <hr /> : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    : '';
