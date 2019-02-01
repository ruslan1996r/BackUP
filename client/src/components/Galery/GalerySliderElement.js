import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class GalerySliderElement extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="gallery">
        <Slider {...settings}>
          {this.props.gallery.map((item, key) => {
            return (
              <div className="photo-from-gallery">
                <img src={item.photo} alt="галерея" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.indexData.gallery, //данные для GalerySliderElement
  };
};

export default connect(mapStateToProps)(
  GalerySliderElement,
);
