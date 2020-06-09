import React from 'react';
import { Chip } from '@material-ui/core';
import { hashUrl } from '../../services/goToUrl';

export const TvSeasonEpisodeList = ({ tvSeason, className }) => {
  const { episodes } = tvSeason;
  return (
    episodes &&
    episodes.length !== 0 && (
      <div className={className}>
        <div className='tvSeason__single-episode-list'>
          <span>Episodes</span>
          <hr />
          <div>
            {episodes.map((episode) => (
              <Chip
                label={`${episode.episode_number} - ${episode.name}`}
                key={episode.id}
                onClick={() => hashUrl(`episode-${episode.episode_number}`)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
