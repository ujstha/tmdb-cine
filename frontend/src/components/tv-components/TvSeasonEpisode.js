import React, { Component } from 'react';
import { MediumPosterImage } from '../helper-components/PosterImage';
import { VoteAverage } from '../helper-components/VoteAverage';
import { goToRte } from '../../services/goToUrl';
import { GetFullDate } from '../../services/FormattedData';
import { TvWatch } from '../common-components/MovieAndTvWatch';

const crewAndGuest = (results, title) =>
  results.length !== 0 && (
    <div className={`tvSeason__single-episode-${title}`}>
      <b>{title}s : </b>{' '}
      {results.map((result, resultIndex) => (
        <span key={resultIndex}>
          {result.name} <small>({result.job || result.character})</small>
          {resultIndex + 1 < results.length ? ', ' : ''}
        </span>
      ))}
    </div>
  );

class TvSeasonEpisode extends Component {
  state = {
    visible: false,
    activeEpisode: null,
    episodeName: '',
  };
  openTv = (number, name) => {
    this.setState({
      visible: true,
      activeEpisode: number,
      episodeName: name,
    });
  };
  closeTv = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { tvSeason, imdbId, title } = this.props;
    const { visible, activeEpisode, episodeName } = this.state;
    return (
      tvSeason.episodes.length !== 0 && (
        <>
          <h3>{title}</h3>
          {tvSeason.episodes.map((episode, index) => (
            <div
              className='tvSeason__single-episode-container row'
              id={`episode-${episode.episode_number}`}
              key={index}
            >
              <MediumPosterImage
                result={episode}
                className='col-md-5 col-lg-4 col-xl-3 tvSeason__single-episode-img'
              />
              <div className='tvSeason__single-episode-detail col-md-7 col-lg-8 col-xl-9'>
                <div className='tvSeason__single-episode-name'>
                  {episode.episode_number}. {episode.name}
                </div>
                <div className='tvSeason__single-episode-sub'>
                  <VoteAverage result={episode} /> ({episode.vote_count} users)
                  &ensp;|&ensp;
                  <span
                    className='tvSeason__single-release-date'
                    onClick={() => goToRte('tv', episode)}
                  >
                    <i className='fa fa-clock-o mr-2' />
                    {GetFullDate(episode)}
                  </span>
                </div>
                <div className='tvSeason__single-episode-overview'>
                  {episode.overview}
                </div>
                {crewAndGuest(episode.crew, 'crew')}
                {crewAndGuest(episode.guest_stars, 'guest star')}
                <button
                  className='btn tvSeason__single-watch-episode'
                  onClick={() =>
                    this.openTv(episode.episode_number, episode.name)
                  }
                >
                  <i className='fa fa-play' />
                  &ensp; Watch this episode
                </button>
              </div>
            </div>
          ))}
          <TvWatch
            visible={visible}
            onClose={this.closeTv}
            imdbId={imdbId}
            season={tvSeason}
            activeEpisode={activeEpisode}
            episodeName={episodeName}
          />
        </>
      )
    );
  }
}

export default TvSeasonEpisode;
