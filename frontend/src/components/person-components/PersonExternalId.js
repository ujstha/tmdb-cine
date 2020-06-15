import React from 'react';
import {
  imdbPerson,
  instaPerson,
  twitterPerson,
  fbPerson,
} from '../../services/goToUrl';

export const PersonExternalId = ({ person }) => {
  const { external_ids } = person;
  return (
    <div className='person__sinlge-external-ids'>
      <hr />
      {external_ids.imdb_id && (
        <i className='fa fa-imdb' onClick={() => imdbPerson(person)} />
      )}
      {external_ids.instagram_id && (
        <i className='fa fa-instagram' onClick={() => instaPerson(person)} />
      )}
      {external_ids.twitter_id && (
        <i className='fa fa-twitter' onClick={() => twitterPerson(person)} />
      )}
      {external_ids.facebook_id && (
        <i className='fa fa-facebook-square' onClick={() => fbPerson(person)} />
      )}
      <hr />
    </div>
  );
};
