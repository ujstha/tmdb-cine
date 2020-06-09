import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesAction } from '../actions/moviesAction';
import { genresAction } from '../actions/genresAction';
import { Loader } from '../components/helper-components/Loader';
import { MovieAndTvMain } from '../components/common-components/MovieAndTvMain';
import { Paging } from '../components/helper-components/Paging';
import HeadTitle from '../components/helper-components/HeadTitle';
import { MovieAndTvFilterOption } from '../components/common-components/MovieAndTvFilterOption';
import { searchParam } from '../services/searchParam';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { CategoryTabs } from '../components/helper-components/CategoryTabs';

class MovieMainContainer extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.moviesAction(
      searchParam('sort_by') || 'popularity.desc',
      searchParam('gte_release_date') || '',
      searchParam('release_year') || '',
      searchParam('with_genre_id') || '',
      searchParam('with_keyword_id') || '',
      page
    );
    this.props.genresAction('movie');
  }

  render() {
    const { movies, genres, isLoading } = this.props;
    const { results } = movies;
    return isLoading ? (
      <Loader />
    ) : (
      <div className='movieTv__main-wrapper route__wrapper'>
        <HeadTitle title={`Movie List`} />
        <div className='row'>
          <div className='col-12 my-2'>
            <MovieAndTvFilterOption genres={genres} urlType='movie' />
            <CategoryTabs urlType='movie' />
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
              <Paging pagination={movies} urlType='movies' />
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

export default connect(mapStateToProps, { genresAction, moviesAction })(
  MovieMainContainer
);
