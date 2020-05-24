import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const Loader = () => (
  <div className='loader'>
    <CircularProgress color='primary' size={70} thickness={2} />
  </div>
);

export const SmallLoader = () => (
  <div className='small-loader'>
    <CircularProgress color='primary' thickness={2} />
  </div>
);
