import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorPage } from '../components/helper-components/ErrorPage';
import HomeContainer from '../containers/HomeContainer';

export default (
  <Switch>
    <Route exact path='/' component={HomeContainer} />
    <Route path='*' component={ErrorPage} />
  </Switch>
);
