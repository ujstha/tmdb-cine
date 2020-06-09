import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorPage } from '../components/helper-components/ErrorPage';
import { MovieAndTvGenreList } from '../components/common-components/MovieAndTvGenreList';
import HomeContainer from '../containers/HomeContainer';
import MovieMainContainer from '../containers/MovieMainContainer';
import TvMainContainer from '../containers/TvMainContainer';
import MovieSingleContainer from '../containers/MovieSingleContainer';
import TvSingleContainer from '../containers/TvSingleContainer';
import TvSeasonSingleContainer from '../containers/TvSeasonSingleContainer';
import MovieCategoryContainer from '../containers/MovieCategoryContainer';
import TvCategoryContainer from '../containers/TvCategoryContainer';
import SearchResultContainer from '../containers/SearchResultContainer';

export default (
  <Switch>
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/(page)?/:page?/movies' component={MovieMainContainer} />
    <Route
      exact
      path='/(page)?/:page?/movies/category/:category'
      component={MovieCategoryContainer}
    />
    <Route
      exact
      path='/movie/:movieID/:movieName'
      component={MovieSingleContainer}
    />
    <Route exact path='/(page)?/:page?/tvs' component={TvMainContainer} />
    <Route
      exact
      path='/(page)?/:page?/tvs/category/:category'
      component={TvCategoryContainer}
    />
    <Route exact path='/tv/:tvID/:tvName' component={TvSingleContainer} />
    <Route
      exact
      path='/tv/:tvID/:tvName/with_imdb_id=:imdbId&amp;all_seasons=:totalSeason&amp;with_special=:withSpecial/season/:seasonNumber'
      component={TvSeasonSingleContainer}
    />
    <Route exact path='/lists/genres' component={MovieAndTvGenreList} />
    <Route
      exact
      path='/(page)?/:page?/search/query=:searchQuery&amp;type=:searchType'
      component={SearchResultContainer}
    />
    <Route path='*' component={ErrorPage} />
  </Switch>
);
