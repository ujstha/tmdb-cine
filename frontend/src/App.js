import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationBarContainer from './containers/NavigationBarContainer';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Krub, sans-serif',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationBarContainer />
          <Switch>
            <Route exact path='/tvs/:id' component={NavigationBarContainer} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
