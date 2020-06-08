import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { multiSearchAction } from '../actions/searchAction';
import { goToUrl } from '../services/goToUrl';
import SearchInput from '../components/navigation-component/SearchInput';
import SideNavigationBar from '../components/navigation-component/SideNavigationBar';
import SearchSuggestions from '../components/navigation-component/SearchSuggestions';
import NavigationBar from '../components/navigation-component/NavigationBar';

class NavigationBarContainer extends Component {
  state = {
    searchInputOpen: false,
    sideNavCollapsed: false,
    searchSuggestionBox: true,
    searchQuery: '',
    dark_theme: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.setState({
      dark_theme: localStorage.dark_theme === 'true' ? true : false,
    });
  }

  UNSAFE_componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleSearchInput = () => {
    this.setState({
      searchInputOpen: !this.state.searchInputOpen,
      searchSuggestionBox: false,
      searchQuery: '',
    });
  };

  toggleSideNav = () => {
    this.setState({
      sideNavCollapsed: !this.state.sideNavCollapsed,
    });
  };

  componentDidUpdate(prevState) {
    if (
      this.state.searchInputOpen !== prevState.searchInputOpen &&
      document.getElementById('search__search-focus')
    ) {
      document.getElementById('search__search-focus').focus();
    }

    this.toggleBodyClass();
  }

  toggleBodyClass = () => {
    if (localStorage.dark_theme === 'true') {
      document.body.classList.add('dark-theme');
    } else if (localStorage.dark_theme === 'false') {
      document.body.classList.remove('dark-theme');
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery !== '') {
      goToUrl(`/search/query=${this.state.searchQuery}&type=movie`);
    }
  };

  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
      searchSuggestionBox: true,
    });
    if (e.target.value !== '') {
      this.props.multiSearchAction(e.target.value.trim(), '1');
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      (!this.wrapperRef.contains(event.target) ||
        event.target.innerText === 'close')
    ) {
      this.setState({
        sideNavCollapsed: false,
        searchSuggestionBox: false,
      });
    }
  };

  handleThemeChange = () => {
    this.setState({
      dark_theme: !this.state.dark_theme,
    });
    localStorage.setItem('dark_theme', !this.state.dark_theme);
  };
  render() {
    const {
      searchInputOpen,
      searchSuggestionBox,
      sideNavCollapsed,
      searchQuery,
    } = this.state;
    const { searchResults } = this.props;
    return (
      <>
        <NavigationBar
          searchInputOpen={searchInputOpen}
          toggleSideNav={this.toggleSideNav}
          toggleSearchInput={this.toggleSearchInput}
        />
        <SearchInput
          searchInputOpen={searchInputOpen}
          value={searchQuery}
          toggleSearchInput={this.toggleSearchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <SearchSuggestions
          query={searchQuery}
          searchResults={searchResults.searchSuggestions}
          isLoading={searchResults.isLoading}
          setWrapperRef={this.setWrapperRef}
          searchSuggestionOpen={searchSuggestionBox}
        />
        <SideNavigationBar
          collapsed={sideNavCollapsed}
          setWrapperRef={this.setWrapperRef}
          handleThemeChange={this.handleThemeChange}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

export default connect(mapStateToProps, { multiSearchAction })(
  withRouter(NavigationBarContainer)
);
