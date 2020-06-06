import React from 'react';

export const TitleNames = (result) =>
  result.title || result.original_name || result.name;

export const SplittedTitleNames = ({ result }) => {
  const titles = result.title || result.original_name || result.name;
  return titles
    .split(' ')
    .map((title, index) => <span key={index}>{title}&nbsp;</span>);
};

export const SplittedTitles = (season) =>
  season
    .split(' ')
    .map((title, index) => <span key={index}>{title}&nbsp;</span>);
