import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryMoviesAction } from '../actions/moviesAction';
import { genresAction } from '../actions/genresAction';
import { Loader } from '../components/helper-components/Loader';
import { MovieAndTvMain } from '../components/common-components/MovieAndTvMain';
import { Paging } from '../components/helper-components/Paging';
import { HeadTitle } from '../components/helper-components/HeadTitle';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { CategoryTabs } from '../components/helper-components/CategoryTabs';

class MovieCategoryContainer extends Component {
  componentDidMount() {
    const { category, page } = this.props.match.params;
    this.props.categoryMoviesAction(category, page);
    this.props.genresAction('movie');
  }

  render() {
    const { movies, genres, match, isLoading } = this.props;
    const { category } = match.params;
    const { results } = movies;
    return isLoading ? (
      <Loader />
    ) : (
      <div className='movieTv__main-wrapper movieTv__category-wrapper route__wrapper'>
        <HeadTitle title={`Category - ${category} Movies`} />
        <div className='row'>
          <div className='col-12 my-2'>
            <CategoryTabs category={category} urlType='movie' />
          </div>
          {results && results.length !== 0 ? (
            <>
              {results.map((movie) => (
                <MovieAndTvMain
                  key={movie.id}
                  movieTv={movie}
                  genres={genres}
                  urlType='movie'
                />
              ))}
              <Paging
                pagination={movies}
                urlType={`movies/category/${category}`}
              />
            </>
          ) : (
            <ZeroResult message='No Movies found.' />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.genres.isLoading || state.movies.isLoading ? true : false,
  genres: state.genres.movieGenres.genres,
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { genresAction, categoryMoviesAction })(
  MovieCategoryContainer
);
