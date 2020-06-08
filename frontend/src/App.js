import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationBarContainer from './containers/NavigationBarContainer';
import Footer from './components/common-components/Footer';
import MoveToTop from './components/common-components/MoveToTop';
import routes from './routes';

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
          <div className='routes'>{routes}</div>
          <Footer />
          <MoveToTop />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
