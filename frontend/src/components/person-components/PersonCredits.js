import React from 'react';
import {
  GetYear,
  GetLatestRelease,
  GetCharacter,
} from '../../services/FormattedData';
import { goToMedia } from '../../services/goToUrl';
import { TitleNames } from '../helper-components/TitleNames';
import { MediumPosterImage } from '../helper-components/PosterImage';
import { FilterMenu } from '../helper-components/FilterMenu';
import { searchAddr } from '../../services/searchParam';

export const PersonCredits = ({ person }) => {
  const { combined_credits, name } = person;
  const { cast, crew } = combined_credits;

  const mediaType = searchAddr.get('media_type');
  const creditType = searchAddr.get('credit_type');

  const credits = searchAddr.get('credit_type') === 'crew' ? crew : cast;

  const filterCredit =
    mediaType === 'tv' || mediaType === 'movie'
      ? credits.filter((media) => media.media_type === mediaType)
      : credits;

  return (
    <div className='person__single-credits'>
      <div className='person__single-credits-filter'>
        <b>
          {mediaType || 'All'}&ensp;-&ensp;{creditType || 'Cast'}
        </b>
        <span>
          <FilterMenu menu={['movie', 'tv']} option='media_type' title='All' />
          <FilterMenu
            menu={['cast', 'crew']}
            option='credit_type'
            title='Credit'
          />
        </span>
      </div>
      {filterCredit.length !== 0 ? (
        <ul>
          {filterCredit
            .sort(
              (oldest, latest) =>
                GetLatestRelease(latest) - GetLatestRelease(oldest)
            )
            .map((castCredit, index) => (
              <li
                key={index}
                className='person__single-credit'
                onClick={() => goToMedia(castCredit)}
              >
                <MediumPosterImage
                  result={castCredit}
                  className='person__single-credit-img'
                />
                <span className='person__single-credit-detail'>
                  {TitleNames(castCredit)}
                  <small>{GetCharacter(castCredit)}</small>
                  <br />
                  {GetYear(castCredit)}
                </span>
              </li>
            ))}
        </ul>
      ) : (
        <span className='person__single-credits-zero'>{`${name} doesn't have any credits as a ${
          creditType || 'cast'
        } in ${mediaType || 'movie'}.`}</span>
      )}
    </div>
  );
};
