import React, { Component } from 'react';
import Slider from 'react-slick';
import { BackdropImage } from '../helperComponents/PosterImage';
import { VoteAverage } from '../helperComponents/VoteAverage';
import { TitleNames } from '../helperComponents/TitleNames';
import { GetYear } from '../../services/FormattedData';
import { goToUrl } from '../../services/goToUrl';

class Home extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }
  componentDidMount() {
    if (this.parentRef.current) {
      this.parentRef.current.addEventListener('wheel', this.handleScroll);
    }
  }

  handleScroll = (e) => {
    if (e.deltaX > 0) {
      this.sliderRef && this.sliderRef.slickPrev();
    } else if (e.deltaX < 0) {
      this.sliderRef && this.sliderRef.slickNext();
    }
  };
  render() {
    const { category, movieTv, title, urlType } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 464,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    };

    return (
      movieTv &&
      movieTv.length !== 0 && (
        <div ref={this.parentRef} className='home__wrapper'>
          <span onClick={() => goToUrl(`/${urlType}s/category/${category}`)}>
            {title}
          </span>
          <Slider
            {...settings}
            ref={(sliderRef) => (this.sliderRef = sliderRef)}
          >
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
          </Slider>
        </div>
      )
    );
  }
}

export default Home;
