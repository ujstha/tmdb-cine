import React from 'react';
import { goToUrl } from '../../services/goToUrl';
import { genres } from '../../constants/genreLists';
import { HeadTitle } from '../helper-components/HeadTitle';

const { movieGenres, tvGenres } = genres;

const genreList = (genre, index, urlType) => (
  <div
    className='col-6 col-md-4 col-lg-3 col-xl-2'
    key={index}
    onClick={() => goToUrl(`/${urlType}s?with_genre_id=${genre.id}`)}
  >
    <div className='movieTv__genre-list'>
      <span>{genre.name}</span>
    </div>
  </div>
);

export const MovieAndTvGenreList = () => (
  <div className='movieTv__genre-list-container'>
    <HeadTitle
      title='Browse Movies and TV shows by Genre'
      description='List of movies and tv shows genre'
    />
    <div className='row'>
      <div className='col-12 movieTv__genre-movie'>
        <h3>Browse Movies by Genre</h3>
      </div>
      {movieGenres.map((genre, index) => genreList(genre, index, 'movie'))}
      <div className='col-12 movieTv__genre-tv'>
        <h3>Browse TV Shows by Genre</h3>
      </div>
      {tvGenres.map((genre, index) => genreList(genre, index, 'tv'))}
    </div>
  </div>
);
