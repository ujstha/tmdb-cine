import React from 'react';
import { BackdropImage } from '../helper-components/PosterImage';
import { VoteAverage } from '../helper-components/VoteAverage';
import { TitleNames } from '../helper-components/TitleNames';
import { GetYear } from '../../services/FormattedData';
import { goToUrl } from '../../services/goToUrl';
import Carousel from '../helper-components/Carousel';

const Home = ({ category, movieTv, title, urlType }) => {
  return (
    movieTv &&
    movieTv.length !== 0 && (
      <div className='home__wrapper'>
        <span onClick={() => goToUrl(`/${urlType}s/category/${category}`)}>
          {title}
        </span>
        <Carousel xl={6} lg={4} md={3} sm={2}>
          {movieTv
            .filter((filteredHome) => filteredHome.category === category)
            .map((homeMovieTv) => (
              <div
                key={homeMovieTv.id}
                className='home__homeMovieTv'
                onClick={() =>
                  goToUrl(
                    `/${urlType}/${homeMovieTv.id}/${TitleNames(homeMovieTv)}`
                  )
                }
              >
                <BackdropImage
                  result={homeMovieTv}
                  className='home__homeMovieTv-img'
                />
                <div className='home__homeMovieTv-overlay'>
                  <span className='home__homeMovieTv-title'>
                    {TitleNames(homeMovieTv)}
                  </span>
                  <span className='home__homeMovieTv-date-vote'>
                    <VoteAverage
                      result={homeMovieTv}
                      className='home__homeMovieTv-vote'
                    />
                    &ensp;|&ensp;
                    <span>{GetYear(homeMovieTv)}</span>
                  </span>
                </div>
              </div>
            ))}{' '}
        </Carousel>
      </div>
    )
  );
};

export default Home;
