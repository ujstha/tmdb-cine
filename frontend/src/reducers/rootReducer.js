import { combineReducers } from 'redux';
import { genresReducer } from './genresReducer';
import { personReducer } from './personsReducer';
import { moviesReducer, movieReducer } from './moviesReducer';
import { tvsReducer, tvReducer, tvSeasonReducer } from './tvsReducer';
import { searchReducer } from './searchReducer';
import { registerReducer, loginReducer } from './usersReducer';
import { saveMediaReducer, fetchMediaReducer } from './mediasReducer';
import { homeReducer } from './homeReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  saveMedia: saveMediaReducer,
  media: fetchMediaReducer,
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
