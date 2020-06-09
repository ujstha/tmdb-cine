import React from 'react';
import { goToUrl } from '../../services/goToUrl';
import { CreditPosterImage } from '../helper-components/PosterImage';

export const MovieAndTvCredit = ({ movieTv, title }) => {
  return (
    movieTv.length !== 0 && (
      <>
        <h3>{title}</h3>
        <div className='movieTv__credit-container'>
          {movieTv.map((credit, index) => (
            <div
              className='media'
              key={index}
              onClick={() => goToUrl(`/person/${credit.id}/${credit.name}`)}
            >
              <CreditPosterImage
                result={credit}
                className='movieTv__credit-img'
              />
              <div className='media-body'>
                <div className='movieTv__credit-name'>
                  <span>{credit.name}</span>
                </div>
                <div className='movieTv__credit-job'>
                  {credit.character || credit.job}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
};
