import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorPage } from '../components/helper-components/ErrorPage';
import Footer from '../components/common-components/Footer';

export default (
  <Switch>
    <Route exact path='/' component={Footer} />
    <Route path='*' component={ErrorPage} />
  </Switch>
);
