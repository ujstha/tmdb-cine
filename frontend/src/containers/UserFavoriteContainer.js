import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMediaAction, removeMediaAction } from '../actions/mediasAction';
import { Button } from '@material-ui/core';
import { goToUrl } from '../services/goToUrl';
import { UserFavorite } from '../components/authentication-components/UserFavorite';
import HeadTitle from '../components/helper-components/HeadTitle';
import { ZeroResult } from '../components/helper-components/ErrorPage';
import { Loader } from '../components/helper-components/Loader';

class UserFavoriteContainer extends Component {
  componentDidMount() {
    this.props.fetchMediaAction();
  }
  render() {
    const { isLoading, medias } = this.props;
    const { user, media } = medias;

    return isLoading ? (
      <Loader />
    ) : user ? (
      <div className='user__favorite-wrapper'>
        <HeadTitle title={`${user.firstname} ${user.lastname} - Dashboard`} />

        <div className='user__favorite-welcome'>
          <span>
            <h2>
              Welcome, {user.firstname} {user.lastname}
            </h2>
            <span>Here are movies and tv shows that you love.</span>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              onClick={() => {
                localStorage.removeItem('authToken');
                goToUrl('/');
              }}
            >
              Logout
            </Button>
          </span>
        </div>
        {media && media.length !== 0 ? (
          <>
            {media.filter(
              (filteredMedia) => filteredMedia.mediaType === 'movie'
            ).length !== 0 && (
              <UserFavorite
                favoriteMedia={media}
                filterType='movie'
                title='Your favorite movies'
                remove={this.props.removeMediaAction}
              />
            )}
            {media.filter((filteredMedia) => filteredMedia.mediaType === 'tv')
              .length !== 0 && (
              <UserFavorite
                favoriteMedia={media}
                filterType='tv'
                title='Your favorite tv shows'
                remove={this.props.removeMediaAction}
              />
            )}
          </>
        ) : (
          <ZeroResult message='Your favorite Movie or TV Show list is empty.' />
        )}
      </div>
    ) : (
      <ZeroResult
        message='Something went wrong. Please check if you are signed in....'
        fullHeight={true}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.media.mediaLoading,
  medias: state.media.mediaData,
  error: state.media.error,
});
export default connect(mapStateToProps, {
  fetchMediaAction,
  removeMediaAction,
})(UserFavoriteContainer);
