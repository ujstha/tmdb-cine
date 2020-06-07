import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/helper-components/Loader';
import { movieAction } from '../actions/moviesAction';
import { saveMediaAction } from '../actions/mediasAction';
import { MovieAndTvSingle } from '../components/common-components/MovieAndTvSingle';
import { GetYear } from '../services/FormattedData';
import { MovieWatch } from '../components/common-components/MovieAndTvWatch';
import { ZeroResult } from '../components/helper-components/ErrorPage';

class MovieSingleContainer extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    this.props.movieAction(this.props.match.params.movieID);
  }
  openMovie = () => {
    this.setState({
      visible: true,
    });
  };
  closeMovie = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { isLoading, movie } = this.props;
    const { visible } = this.state;

    return isLoading ? (
      <Loader />
    ) : movie ? (
      <>
        <MovieAndTvSingle
          movieTv={movie}
          urlType='movie'
          saveFavorite={() =>
            this.props.saveMediaAction(
              movie.id,
              'movie',
              movie.title,
              movie.backdrop_path,
              movie.poster_path,
              GetYear(movie)
            )
          }
          watch={this.openMovie}
        />
        <MovieWatch
          visible={visible}
          onClose={this.closeMovie}
          movieTv={movie}
        />
        {console.log(movie)}
      </>
    ) : (
      <ZeroResult message='Something went wrong !' />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.movie.isLoading,
  movie: state.movie.movie.data,
});
export default connect(mapStateToProps, { movieAction, saveMediaAction })(
  MovieSingleContainer
);
