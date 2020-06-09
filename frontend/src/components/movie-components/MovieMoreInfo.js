import React from 'react';
import { GetFact } from '../../services/FormattedData';
import { moreInfo } from '../../constants/moreInfo';

export const MovieMoreInfo = ({ movieTv, saveFavorite, watch }) => (
  <>
    <GetFact result={movieTv} className='col-xl-3 col-lg-3 col-md-4' />
    <div className='col-xl-4 col-lg-4 col-md-4'>
      <div className='movieTv__single-options'>
        <ul>
          {moreInfo(movieTv, saveFavorite, watch)
            .filter((filteredInfo) => filteredInfo.urlType !== 'tv')
            .map((info, index) => (
              <li onClick={info.onClick} key={index}>
                <span>
                  <i className={info.icon} />
                  &ensp; {info.title}
                </span>
                {index + 1 < moreInfo().length ? <hr /> : ''}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </>
);
