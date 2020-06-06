import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { goToUrl } from '../../services/goToUrl';

export const CategoryTabs = ({ category, urlType }) => (
  <Paper square className='movieTv__category-tabs'>
    <Tabs
      value={
        category === 'popular'
          ? 0
          : category === 'top_rated'
          ? 1
          : category === 'upcoming'
          ? 2
          : 0
      }
      indicatorColor='primary'
      textColor='primary'
      centered
    >
      <Tab
        onClick={() => goToUrl(`/${urlType}s/category/popular`)}
        label='Popular'
      />
      <Tab
        onClick={() => goToUrl(`/${urlType}s/category/top_rated`)}
        label='Top Rated'
      />
      {urlType === 'movie' && (
        <Tab
          onClick={() => goToUrl(`/${urlType}s/category/upcoming`)}
          label='Upcoming'
        />
      )}
    </Tabs>
  </Paper>
);
