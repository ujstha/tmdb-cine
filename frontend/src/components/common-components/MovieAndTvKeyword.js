import React from 'react';
import { Chip } from '@material-ui/core';
import { goToUrl } from '../../services/goToUrl';

export const MovieAndTvKeyword = ({ movieTv, urlType, className }) => {
  const { keywords, results } = movieTv.keywords;
  const result = urlType === 'movie' ? keywords : results;
  return (
    result &&
    result.length !== 0 && (
      <div className={className}>
        <div className='movieTv__single-keyword'>
          <span>Keywords</span>
          <hr />
          <div>
            {result.map((keyword) => (
              <Chip
                label={keyword.name}
                key={keyword.id}
                onClick={() =>
                  goToUrl(`/${urlType}s/?with_keyword_id=${keyword.id}`)
                }
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
