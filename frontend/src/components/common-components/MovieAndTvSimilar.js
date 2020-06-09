import React, { Component } from 'react';
import Slider from 'react-slick';
import { MediumPosterImage } from '../helper-components/PosterImage';
import { VoteAverage } from '../helper-components/VoteAverage';
import { TitleNames } from '../helper-components/TitleNames';

class MovieAndTvSimilar extends Component {
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
    const { movieTv, title, urlType } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 9,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 464,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };

    return movieTv && movieTv.results.length !== 0 ? (
      <div ref={this.parentRef} className='movieTv__single-similar-wrapper'>
        <h3>{title}</h3>
        <Slider {...settings} ref={(sliderRef) => (this.sliderRef = sliderRef)}>
          {movieTv.results.map((similar) => (
            <a
              href={`/${urlType}/${similar.id}/${TitleNames(similar)}`}
              key={similar.id}
              className='movieTv__single-similar'
            >
              <MediumPosterImage result={similar} />
              <div className='movieTv__single-similar-overlay'>
                <VoteAverage
                  result={similar}
                  className='movieTv__single-similar-vote'
                />
                <span className='movieTv__single-similar-title'>
                  {TitleNames(similar)}
                </span>
              </div>
            </a>
          ))}{' '}
        </Slider>
      </div>
    ) : (
      ''
    );
  }
}

export default MovieAndTvSimilar;
