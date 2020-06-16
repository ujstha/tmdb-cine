import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/helper-components/Loader';
import { tvAction } from '../actions/tvsAction';
import { saveMediaAction } from '../actions/mediasAction';
import { MovieAndTvSingle } from '../components/common-components/MovieAndTvSingle';
import { GetYear } from '../services/FormattedData';
import { ColorExtractor } from 'react-color-extractor';
import { hexToRgba } from '../services/hexToRgba';
import { imageUrl } from '../components/helper-components/PosterImage';
import { ZeroResult } from '../components/helper-components/ErrorPage';

class TvSingleContainer extends Component {
  state = {
    bgColor: '',
  };
  componentDidMount() {
    this.props.tvAction(this.props.match.params.tvID);
  }
  render() {
    const { isLoading, tv } = this.props;
    const { bgColor } = this.state;
    return isLoading ? (
      <Loader />
    ) : tv ? (
      <>
        <ColorExtractor
          src={imageUrl(tv)}
          getColors={(colors) =>
            this.setState({
              bgColor: hexToRgba(colors[0], 0.5),
            })
          }
        ></ColorExtractor>
        <MovieAndTvSingle
          movieTv={tv}
          urlType='tv'
          saveFavorite={() =>
            this.props.saveMediaAction(
              tv.id,
              'tv',
              tv.original_name,
              tv.backdrop_path,
              tv.poster_path,
              GetYear(tv)
            )
          }
          bgColor={bgColor}
        />
      </>
    ) : (
      <ZeroResult message='Something went wrong !' />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.tv.isLoading,
  tv: state.tv.tv.data,
  media: state.saveMedia,
});
export default connect(mapStateToProps, { tvAction, saveMediaAction })(
  TvSingleContainer
);
