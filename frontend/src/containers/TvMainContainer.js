import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tvsAction } from '../actions/tvsAction';
import { genresAction } from '../actions/genresAction';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { CategoryTabs } from '../components/helper-components/CategoryTabs';
import { Loader } from '../components/helper-components/Loader';
import { Paging } from '../components/helper-components/Paging';
import HeadTitle from '../components/helper-components/HeadTitle';
import { searchParam } from '../services/searchParam';
import { MovieAndTvMain } from '../components/common-components/MovieAndTvMain';
import { MovieAndTvFilterOption } from '../components/common-components/MovieAndTvFilterOption';

class TvMainContainer extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.tvsAction(
      searchParam('sort_by') || 'popularity.desc',
      searchParam('gte_release_date') || '',
      searchParam('release_year') || '',
      searchParam('with_genre_id') || '',
      searchParam('with_keyword_id') || '',
      page
    );
    this.props.genresAction('tv');
  }

  render() {
    const { tvs, genres, isLoading } = this.props;
    const { results } = tvs;
    return isLoading ? (
      <Loader />
    ) : (
      <div className='movieTv__main-wrapper route__wrapper'>
        <HeadTitle title='TV Shows' />
        <div className='row'>
          <div className='col-12 my-2'>
            <MovieAndTvFilterOption genres={genres} urlType='tv' />
            <CategoryTabs urlType='tv' />
          </div>
          {results && results.length !== 0 ? (
            <>
              {results.map((tv) => (
                <MovieAndTvMain
                  key={tv.id}
                  movieTv={tv}
                  genres={genres}
                  urlType='tv'
                />
              ))}
              <Paging pagination={tvs} urlType='tvs' />
            </>
          ) : (
            <ZeroResult message='No TV Shows found.' />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.genres.isLoading || state.tvs.isLoading ? true : false,
  genres: state.genres.tvGenres.genres,
  tvs: state.tvs.tvs,
});

export default connect(mapStateToProps, { genresAction, tvsAction })(
  TvMainContainer
);
