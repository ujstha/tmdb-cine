import React from 'react';
import { goToUrl } from '../../services/goToUrl';
import { TitleNames } from '../helper-components/TitleNames';
import { GetYear } from '../../services/FormattedData';
import { VoteAverage } from '../helper-components/VoteAverage';
import { BackdropImage } from '../helper-components/PosterImage';

export const SearchResult = ({ searchResults, searchType }) =>
  searchResults.map((searchResult, index) => (
    <div
      className={`col-6 col-md-4 col-lg-3 col-xl-2 col-${searchType}`}
      key={index}
    >
      <div
        key={searchResult.id}
        className='search__result'
        onClick={() =>
          goToUrl(
            `/${searchType}/${searchResult.id}/${TitleNames(searchResult)}`
          )
        }
      >
        <BackdropImage result={searchResult} className='search__result-img' />
        <div className='search__result-overlay'>
          <div className='search__result-title'>{TitleNames(searchResult)}</div>
          <span className='search__result-date-vote'>
            {searchType !== 'person' ? (
              <>
                <VoteAverage
                  result={searchResult}
                  className='search__result-vote'
                />
                &ensp;|&ensp;
                <span>{GetYear(searchResult)}</span>
              </>
            ) : (
              <span>Known for {searchResult.known_for_department}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  ));
