import React from 'react';
import Helmet from 'react-helmet';

export const HeadTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`${title} | TMDbCine`}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};
