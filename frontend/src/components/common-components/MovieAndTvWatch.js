import React from 'react';
import { Drawer } from 'antd';
import { ZeroResult } from '../helper-components/ErrorPage';

export const MovieWatch = ({ visible, onClose, movieTv }) => {
  const imdb_id = movieTv.external_ids.imdb_id;
  return (
    <Drawer
      title={movieTv.title}
      zIndex={99999}
      visible={visible}
      onClose={onClose}
      width='100%'
      keyboard
    >
      {visible &&
        (imdb_id ? (
          <iframe
            title={movieTv.title}
            src={`https://v2.vidsrc.me/embed/${imdb_id}/`}
            allowFullScreen
            style={{ height: '100%', width: '100%' }}
            frameBorder='0'
          />
        ) : (
          <ZeroResult message='Movie not found.' />
        ))}
    </Drawer>
  );
};

export const TvWatch = ({
  visible,
  onClose,
  imdbId,
  season,
  activeEpisode,
  episodeName,
}) => (
  <Drawer
    title={`Episode ${activeEpisode} - ${episodeName}`}
    zIndex={99999}
    visible={visible}
    onClose={onClose}
    width='100%'
    keyboard
  >
    {visible &&
      (imdbId ? (
        <iframe
          title={activeEpisode}
          src={`https://vidsrc.me/embed/${imdbId}/${season.season_number}-${activeEpisode}/`}
          allowFullScreen
          style={{ height: '100%', width: '100%' }}
          frameBorder='0'
        />
      ) : (
        <ZeroResult message='TV Show not found.' />
      ))}
  </Drawer>
);
