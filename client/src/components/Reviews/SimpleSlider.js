import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

// import { sendFeedback } from '../../redux/actions/sendFeedback'; // СЮДА импортнуть (уже не нужно)

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="reviews-slider-element">
        <Slider {...settings}>
          {this.props.feedback.map((item, key) => {
            return (
              <div className="slider-element">
                <p className="text-review">{item.text}</p>
                <p className="author">{item.author}</p>
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
    feedback: state.indexData.feedback, //данные для SimpleSlider
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleSlider);
