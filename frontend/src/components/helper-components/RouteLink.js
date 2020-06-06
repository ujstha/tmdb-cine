import React from 'react';

export const MovieTvLink = ({ children, urlType, result }) => (
  <a
    href={`/${urlType}/${result.id}/${
      result.title || result.original_name || result.name
    }`}
  >
    {children}
  </a>
);

export const GenreLink = ({ urlType, index, genre, length, id }) => (
  <li>
    <a href={`/${urlType}s/?with_genre_id=${id}`}>
      {genre === 'Science Fiction' ? 'Sci-Fi' : genre}
    </a>
    <span>{index + 1 < length && ','}&nbsp;</span>
  </li>
);
