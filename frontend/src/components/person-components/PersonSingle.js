import React from 'react';
import {
  GetFullDate,
  GetFullDate1,
  age,
  GetYearDiff,
} from '../../services/FormattedData';
import { goToMedia } from '../../services/goToUrl';
import {
  backgroundImg,
  MediumPosterImage,
} from '../helper-components/PosterImage';
import {
  SplittedTitleNames,
  TitleNames,
} from '../helper-components/TitleNames';
import { MovieAndTvImage } from '../common-components/MovieAndTvImage';
import { PersonExternalId } from './PersonExternalId';
import { PersonCredits } from './PersonCredits';

export const PersonSingle = ({ person }) => {
  const { homepage, combined_credits } = person;
  return (
    <div className='row'>
      <div
        className='col-xl-2 col-lg-3 col-md-3 person__single-img'
        style={{ backgroundImage: backgroundImg(person) }}
      ></div>
      <div className='col-xl-10 col-lg-9 col-md-9'>
        <div className='person__single-detail'>
          <div className='person__single-title'>
            <SplittedTitleNames result={person} /> {GetYearDiff(person)}
            <span className='person__single-known-for'>
              Known for {person.known_for_department}
            </span>
            {homepage && (
              <>
                <hr />
                <i className='fa fa-globe' />
                &emsp;
                <a href={homepage}>{homepage}</a>
                <hr />
              </>
            )}
          </div>
          <p>
            <b>Also known as: </b>
            {person.also_known_as[0] || person.name}
          </p>
          <p>
            <b>Born:</b> {person.birthday ? GetFullDate(person) : 'N/A'}{' '}
            {!person.deathday && age(person)}
          </p>
          <p>
            <b>Birth Place:</b> {person.place_of_birth || 'N/A'}
          </p>
          <p>
            {GetFullDate1(person)} {person.deathday && age(person)}
          </p>
          <PersonExternalId person={person} />
          <span
            id='person__single-bio'
            className='person__single-bio truncated'
          >
            {person.biography}
          </span>
          <span
            className='truncate-btn'
            onClick={() =>
              document
                .getElementById('person__single-bio')
                .classList.toggle('truncated')
            }
          />
          {combined_credits.cast && combined_credits.cast.length !== 0 && (
            <>
              <h3>Known for</h3>
              <div className='person__single-credit-known'>
                {combined_credits.cast.slice(0, 20).map((castCredit, index) => (
                  <div key={index} onClick={() => goToMedia(castCredit)}>
                    <MediumPosterImage result={castCredit} />
                    <p>{TitleNames(castCredit)}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          <MovieAndTvImage movieTv={person} title='Photos' />
          <PersonCredits person={person} />
        </div>
      </div>
    </div>
  );
};
