import React from 'react';
import { Empty, Button } from 'antd';
import errorImg from '../../assets/images/404.png';

export const ErrorPage = () => {
  return (
    <div className='error-page-container'>
      <div className='error-page'>
        <div className='error-img'>
          <img src={errorImg} alt='error img' />
        </div>
        <div className='error-details'>
          <h1>4&#9785;4</h1>
          <p>Page Not Found</p>
          <span className='error-msg'>
            Sorry, the page you are looking for does not exists.
          </span>
          <Button type='primary' href='/'>
            &ensp;Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ZeroResult = ({ message, fullHeight }) => (
  <div
    className={`movieTv__zero-result ${
      fullHeight ? 'movieTv__zero-result-full' : ''
    }`}
  >
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
