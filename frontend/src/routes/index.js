import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorPage } from '../components/helper-components/ErrorPage';
import { MovieAndTvGenreList } from '../components/common-components/MovieAndTvGenreList';
import MovieMainContainer from '../containers/MovieMainContainer';
import TvMainContainer from '../containers/TvMainContainer';
import MovieSingleContainer from '../containers/MovieSingleContainer';
import TvSingleContainer from '../containers/TvSingleContainer';
import TvSeasonSingleContainer from '../containers/TvSeasonSingleContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import UserFavoriteContainer from '../containers/UserFavoriteContainer';
import HomeContainer from '../containers/HomeContainer';
import MovieCategoryContainer from '../containers/MovieCategoryContainer';
import TvCategoryContainer from '../containers/TvCategoryContainer';
import SearchResultContainer from '../containers/SearchResultContainer';
import PersonSingleContainer from '../containers/PersonSingleContainer';

const auth =
  localStorage.authToken && localStorage.authToken !== '' ? true : false;

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
    <Route
      exact
      path='/person/:personID/:personName'
      component={PersonSingleContainer}
    />
    <Route exact path='/lists/genres' component={MovieAndTvGenreList} />
    <Route
      exact
      path='/(page)?/:page?/search/query=:searchQuery&amp;type=:searchType'
      component={SearchResultContainer}
    />
    <Route
      path='/auth/register'
      render={() =>
        auth ? <Redirect to='/user/dashboard' /> : <RegisterContainer />
      }
    />
    <Route
      path='/auth/login'
      render={() =>
        auth ? <Redirect to='/user/dashboard' /> : <LoginContainer />
      }
    />
    <Route
      path='/user/dashboard'
      render={() =>
        auth ? <UserFavoriteContainer /> : <Redirect to='/auth/login' />
      }
    />
    <Route path='*' component={ErrorPage} />
  </Switch>
);
