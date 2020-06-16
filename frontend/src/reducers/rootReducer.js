import { combineReducers } from 'redux';
import { genresReducer } from './genresReducer';
import { personReducer } from './personsReducer';
import { moviesReducer, movieReducer } from './moviesReducer';
import { tvsReducer, tvReducer, tvSeasonReducer } from './tvsReducer';
import { searchReducer } from './searchReducer';
import { registerReducer, loginReducer } from './usersReducer';
import { saveMediaReducer, fetchMediaReducer } from './mediasReducer';
import { homeReducer } from './homeReducer';
import { trendingReducer } from './trendingReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  saveMedia: saveMediaReducer,
  media: fetchMediaReducer,
  trending: trendingReducer,
  home: homeReducer,
  genres: genresReducer,
  person: personReducer,
  movies: moviesReducer,
  movie: movieReducer,
  tvs: tvsReducer,
  tv: tvReducer,
  tvSeason: tvSeasonReducer,
  searchResults: searchReducer,
});
