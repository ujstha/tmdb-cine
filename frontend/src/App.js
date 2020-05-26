import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
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
          {routes}
          <Footer />
          <MoveToTop />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
