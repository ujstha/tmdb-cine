import React from 'react';
import { Empty } from 'antd';

export const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Error Page</h1>
    </div>
  );
};

export const ZeroResult = ({ message }) => (
  <div className='movieTv__zero-result'>
    <Empty description={<span>{message}</span>} />
  </div>
);

export const ComingSoon = () => (
  <div className='movieTv__zero-result'>
    <h2>
      COMING SOON. <br />
      This section of website is under-development.
    </h2>
  </div>
);
