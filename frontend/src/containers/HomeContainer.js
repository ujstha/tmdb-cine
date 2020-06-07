import React, { Component } from 'react';
import Home from '../components/common-components/Home';
import { Loader } from '../components/helper-components/Loader';
import { homeMoviesAction, homeTvsAction } from '../actions/homeAction';
import { categories } from '../constants/categoryLists';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  componentDidMount() {
    categories.map((movie) => this.props.homeMoviesAction(movie.id));
    categories
      .filter((category) => category.urlType !== 'movie')
      .map((tv) => this.props.homeTvsAction(tv.id));
  }

  render() {
    const { homeTvs, homeMovies, isLoading } = this.props;
    return isLoading ? (
      <Loader />
    ) : (
      <div className='home__container'>
        {categories.map((category, index) => (
          <Home
            key={index}
            category={category.id}
            movieTv={homeMovies}
            title={`${category.title} Movies`}
            urlType='movie'
          />
        ))}
        {categories
          .filter((filteredCategory) => filteredCategory.urlType !== 'movie')
          .map((category, index) => (
            <Home
              key={index}
              category={category.id}
              movieTv={homeTvs}
              title={`${category.title} TV shows`}
              urlType='tv'
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.home.movieLoading || state.home.tvLoading ? true : false,
  homeMovies: state.home.homeMovies,
  homeTvs: state.home.homeTvs,
});

export default connect(mapStateToProps, { homeMoviesAction, homeTvsAction })(
  HomeContainer
);
