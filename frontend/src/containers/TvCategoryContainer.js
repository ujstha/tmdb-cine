import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryTvsAction } from '../actions/tvsAction';
import { genresAction } from '../actions/genresAction';
import { Loader } from '../components/helper-components/Loader';
import { MovieAndTvMain } from '../components/common-components/MovieAndTvMain';
import { Paging } from '../components/helper-components/Paging';
import { HeadTitle } from '../components/helper-components/HeadTitle';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { CategoryTabs } from '../components/helper-components/CategoryTabs';

class TvCategoryContainer extends Component {
  componentDidMount() {
    const { category, page } = this.props.match.params;
    this.props.categoryTvsAction(category, page);
    this.props.genresAction('tv');
  }

  render() {
    const { tvs, genres, match, isLoading } = this.props;
    const { category } = match.params;
    const { results } = tvs;
    return isLoading ? (
      <Loader />
    ) : (
      <div className='movieTv__main-wrapper route__wrapper'>
        <HeadTitle title={`Category - ${category} TV Shows`} />
        <div className='row'>
          <div className='col-12 my-2'>
            <CategoryTabs category={category} urlType='tv' />
          </div>
          {results && results.length !== 0 ? (
            <>
              {results.map((movie) => (
                <MovieAndTvMain
                  key={movie.id}
                  movieTv={movie}
                  genres={genres}
                  urlType='tv'
                />
              ))}
              <Paging pagination={tvs} urlType={`tvs/category/${category}`} />
            </>
          ) : (
            <ZeroResult message='No TV shows found.' />
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

export default connect(mapStateToProps, { genresAction, categoryTvsAction })(
  TvCategoryContainer
);
