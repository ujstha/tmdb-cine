import React from 'react';

export const VoteAverage = ({ result, className }) => {
  const { vote_average } = result;
  const zeroVote = vote_average === 0 ? true : false;
  return (
    <span className={className} style={zeroVote ? {} : { letterSpacing: 0.5 }}>
      <i className='fa fa-star' />
      {zeroVote
        ? 'N/A'
        : `${
            vote_average % 1 === 0
              ? `${vote_average}.0`
              : vote_average.toFixed(1)
          }`}
    </span>
  );
};
