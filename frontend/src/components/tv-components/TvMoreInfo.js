import React from 'react';
import { moreInfo } from '../../constants/moreInfo';
import { TvSeason } from './TvSeason';

export const TvMoreInfo = ({ movieTv, saveFavorite, watch }) => (
  <>
    <TvSeason tv={movieTv} className='col-xl-3 col-lg-3 col-md-4' />
    <div className='col-xl-4 col-lg-4 col-md-4'>
      <div className='movieTv__single-options'>
        <ul>
          {moreInfo(movieTv, saveFavorite, watch)
            .filter((filteredInfo) => filteredInfo.urlType !== 'movie')
            .map((info, index) => (
              <li onClick={info.onClick} key={index}>
                <span>
                  <i className={info.icon} />
                  &ensp; {info.title}
                </span>
                {index + 1 < moreInfo().length - 1 ? <hr /> : ''}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </>
);
