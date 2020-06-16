import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tvSeasonAction } from '../actions/tvsAction';
import { Loader } from '../components/helper-components/Loader';
import { TvSeasonSingle } from '../components/tv-components/TvSeasonSingle';
import { ZeroResult } from '../components/helper-components/ErrorPage';

class TvSeasonSingleContainer extends Component {
  componentDidMount() {
    const { tvID, seasonNumber } = this.props.match.params;
    this.props.tvSeasonAction(tvID, seasonNumber);
  }

  render() {
    const { tvSeason, match, isLoading } = this.props;
    const { tvID, tvName, imdbId, totalSeason, withSpecial } = match.params;

    return isLoading ? (
      <Loader />
    ) : tvSeason ? (
      <>
        <TvSeasonSingle
          tvId={tvID}
          tvSeason={tvSeason}
          title={tvName}
          imdbId={imdbId}
          totalSeason={totalSeason}
          withSpecial={withSpecial}
        />
      </>
    ) : (
      <ZeroResult message='Something went wrong ! ' />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.tvSeason.isLoading,
  tvSeason: state.tvSeason.tvSeason.data,
});

export default connect(mapStateToProps, { tvSeasonAction })(
  TvSeasonSingleContainer
);
