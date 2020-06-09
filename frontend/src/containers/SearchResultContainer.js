import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleSearchAction } from '../actions/searchAction';
import { Loader } from '../components/helper-components/Loader';
import HeadTitle from '../components/helper-components/HeadTitle';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { SearchResult } from '../components/common-components/SearchResult';
import { Paging } from '../components/helper-components/Paging';
import { Select } from 'antd';
import { goToUrl } from '../services/goToUrl';

class SearchResultContainer extends Component {
  componentDidMount() {
    const { searchType, searchQuery, page } = this.props.match.params;
    this.props.singleSearchAction(searchType, searchQuery, page);
  }
  handleChange = (searchQuery, value) => {
    goToUrl(`/search/query=${searchQuery}&type=${value}`);
  };

  render() {
    const { searchResults, isLoading } = this.props;
    const { searchQuery, searchType } = this.props.match.params;
    const { results } = searchResults;

    return isLoading ? (
      <Loader />
    ) : (
      <div className='search__result-wrapper route__wrapper'>
        <HeadTitle title={`Search results for: ${searchQuery}`} />
        <div className='search__result-container'>
          <div className='row'>
            <div className='col-12'>
              <div>
                Search results for: "{searchQuery}" in &nbsp;
                <Select
                  defaultValue={searchType}
                  onChange={(value) => this.handleChange(searchQuery, value)}
                  style={{ width: 140 }}
                  size='large'
                >
                  <Select.Option value='movie'>Movies</Select.Option>
                  <Select.Option value='tv'>TV Shows</Select.Option>
                  <Select.Option value='person'>Person</Select.Option>
                </Select>
              </div>
            </div>
            {results && results.length !== 0 ? (
              <>
                <SearchResult
                  searchResults={results}
                  searchType={searchType}
                  searchQuery={searchQuery}
                />
                <Paging
                  pagination={searchResults}
                  urlType={`search/query=${searchQuery}&type=${searchType}`}
                />
              </>
            ) : (
              <ZeroResult
                message={`No results found for: "${searchQuery}" in ${searchType}s`}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.searchResults.isLoading,
  searchResults: state.searchResults.searchResults,
});

export default connect(mapStateToProps, { singleSearchAction })(
  SearchResultContainer
);
