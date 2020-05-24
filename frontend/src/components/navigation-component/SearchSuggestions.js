import React from 'react';
import { withRouter } from 'react-router-dom';
import { Empty } from 'antd';
import { GetYear } from '../../services/FormattedData';
import { goToUrl } from '../../services/goToUrl';
import { SmallPosterImage } from '../helper-components/PosterImage';
import { TitleNames } from '../helper-components/TitleNames';
import { VoteAverage } from '../helper-components/VoteAverage';

const SearchSuggestions = ({
  query,
  searchResults,
  isLoading,
  setWrapperRef,
  searchSuggestionOpen,
}) =>
  query !== '' && searchSuggestionOpen ? (
    <div className='search__suggestions-wrapper' ref={setWrapperRef}>
      {!isLoading ? (
        searchResults && searchResults.length !== 0 ? (
          <>
            <div
              className='search__suggestions-result'
              onClick={() => goToUrl(`/search/query=${query}&type=movie`)}
            >
              <span>See all results for "{query}"</span>
            </div>
            {searchResults.map((search, index) => {
              return (
                <div
                  key={index}
                  className='search__suggestions-result-list'
                  onClick={() =>
                    goToUrl(
                      `/${search.media_type}/${search.id}/${TitleNames(search)}`
                    )
                  }
                >
                  <SmallPosterImage
                    className='search__suggestions-img'
                    result={search}
                  />
                  <div className='search__suggestions-detail'>
                    <div className='search__suggestions-title'>
                      <div>{TitleNames(search)}</div>
                      {search.media_type !== 'person' ? (
                        <>
                          {GetYear(search)}
                          &ensp;|&ensp;
                          <VoteAverage result={search} />
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className='search__suggestions-overview'>
                      {search.overview ||
                        `known for ${search.known_for_department}`}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <Empty
            description={
              <span className='text-danger'>No results found.....</span>
            }
          />
        )
      ) : (
        <div className='search__suggestions-loading'>
          <h4>Searching.....</h4>
        </div>
      )}
    </div>
  ) : (
    ''
  );

export default withRouter(SearchSuggestions);
