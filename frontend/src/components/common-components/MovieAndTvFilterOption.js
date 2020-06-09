import React from 'react';
import { releaseYear, sortBy } from '../../constants/filterOptions';
import { FilterMenu } from '../helper-components/FilterMenu';
import { goToUrl } from '../../services/goToUrl';
import { Button } from 'antd';

export const MovieAndTvFilterOption = ({ genres, urlType }) => (
  <>
    <FilterMenu
      menu={releaseYear(1)}
      option='release_year'
      title='Filter by Release Year'
    />
    <FilterMenu menu={sortBy} option='sort_by' title='Sort by' />
    <FilterMenu menu={genres} option='with_genre_id' title='Filter by genre' />
    <Button
      type='primary'
      size='large'
      danger
      onClick={() => goToUrl(`/${urlType}s`)}
    >
      Reset Filters
    </Button>
  </>
);
