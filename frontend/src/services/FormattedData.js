import React from 'react';
import { monthsName } from '../constants/monthsName';

export const GetYear = (result) =>
  new Date(
    result.release_date ||
      result.first_air_date ||
      result.air_date ||
      Date.now()
  ).getFullYear();

export const GetRteDate = (result) =>
  result.release_date || result.first_air_date || result.air_date;

export const GetFullDate = (result) => {
  const date = new Date(
    result.release_date ||
      result.first_air_date ||
      result.air_date ||
      result.birthday
  );
  return `${date.getDate()} ${
    monthsName[date.getMonth()]
  }, ${date.getFullYear()}`;
};

export const GetFullDate1 = (result) => {
  if (result.deathday) {
    const date = new Date(result.deathday);
    return (
      <>
        <b>Died:</b> {date.getDate()} {monthsName[date.getMonth()]},{' '}
        {date.getFullYear()}
      </>
    );
  }
};

export const GetLatestRelease = (result) => {
  return new Date(
    result.release_date || result.first_air_date || result.air_date
  ).getTime();
};

export const age = (result) => {
  const birthDate = new Date(result.birthday).getTime();
  if (!result.deathday && result.birthday) {
    const currDate = Date.now();
    const ageDate = new Date(currDate - birthDate); // miliseconds from epoch
    return `(age ${Math.abs(ageDate.getUTCFullYear() - 1970)} years)`;
  } else if (result.deathday && result.birthday) {
    const currDate = new Date(result.deathday);
    const ageDate = new Date(currDate - birthDate); // miliseconds from epoch
    return `(aged ${Math.abs(ageDate.getUTCFullYear() - 1970)})`;
  }
};

export const GetYearDiff = (result) => {
  if (result.deathday) {
    return `(${new Date(result.birthday).getFullYear()} - ${new Date(
      result.deathday
    ).getFullYear()})`;
  }
};
export const GetRuntime = (result) =>
  `${
    result.runtime || result.episode_run_time
      ? result.runtime || result.episode_run_time
      : 0
  } min`;

export const GetRevenue = (result) => (
  <>
    <span className='movieTv__single-revenue'>Revenue</span>{' '}
    {result.revenue
      ? `$${String(result.revenue).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      : '--'}
  </>
);

export const GetBudget = (result) => (
  <>
    <span className='movieTv__single-budget'>Budget</span>
    {result.budget
      ? `$${String(result.budget).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      : '--'}
  </>
);
export const GetLanguages = (result) => {
  const { spoken_languages } = result;
  return (
    <>
      <span className='movieTv__single-language'>Language</span>
      {spoken_languages
        ? spoken_languages.map((language, index) => (
            <p key={index} className='d-inline-block m-0 p-0'>
              {language.name}
              {index + 1 < spoken_languages.length ? ',' : ''}&nbsp;
            </p>
          ))
        : '--'}
    </>
  );
};

export const GetFact = ({ result, className }) =>
  result.budget || result.revenue ? (
    <div className={className}>
      <div className='movieTv__single-rbg'>
        <span>{GetLanguages(result)}</span>
        <hr />
        <span>{GetBudget(result)}</span>
        <hr />
        <span>{GetRevenue(result)}</span>
      </div>
    </div>
  ) : (
    ''
  );

export const GetCharacter = (result) => {
  const { character, job } = result;
  return character || job ? (
    <>
      {character && <>&ensp;(as {character})</>} {job && <>&ensp;({job})</>}
    </>
  ) : (
    ''
  );
};
