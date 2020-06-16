import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
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
    const { infinite, autoplay, xl, lg, md, sm } = this.props;

    const settings = {
      dots: false,
      autoplay: autoplay || false,
      autoplaySpeed: 5000,
      infinite: infinite || false,
      speed: autoplay ? 2000 : 1500,
      slidesToShow: xl,
      slidesToScroll: autoplay ? 1 : xl,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: lg || xl,
            slidesToScroll: lg || xl,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: md || xl,
            slidesToScroll: md || xl,
          },
        },
        {
          breakpoint: 464,
          settings: {
            slidesToShow: sm || xl,
            slidesToScroll: sm || xl,
          },
        },
      ],
    };

    return (
      <div ref={this.parentRef}>
        <Slider {...settings} ref={(sliderRef) => (this.sliderRef = sliderRef)}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
