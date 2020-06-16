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
    const { infinite, xl, lg, md, sm } = this.props;

    const settings = {
      dots: false,
      infinite: infinite,
      speed: 500,
      slidesToShow: xl,
      slidesToScroll: xl,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: lg,
            slidesToScroll: lg,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: md,
            slidesToScroll: md,
          },
        },
        {
          breakpoint: 464,
          settings: {
            slidesToShow: sm,
            slidesToScroll: sm,
            centerMode: true,
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
