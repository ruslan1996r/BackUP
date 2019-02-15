import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class SlideAdultsEvent extends Component {
  render() {
    let width = window.innerWidth;
    let changeWidth;
    if (width <= 650) {
      changeWidth = 1;
    } else {
      changeWidth = 4;
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      slidesToShow: changeWidth,
      slidesToScroll: changeWidth,
    };
    return (
      <div className="slider-for-adults-event">
        <Slider {...settings}>
          {this.props.adultPainting.map((item, key) => {
            return (
              <div className="adults-event">
                <ul>
                  <li>
                    <div className="descr-event">
                      <p className="cost-time-p">
                        Тривалість: {item.time}
                      </p>
                      <p className="cost-time-p">
                        Вартість: {item.cost}
                      </p>
                    </div>
                    <img
                      src={item.painting}
                      alt="Картинка"
                    />
                  </li>
                </ul>
                <p className="adults-footer">{item.name}</p>
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
    adultPainting: state.indexData.adultPainting, //данные для SlideAdultsEvent
  };
};

export default connect(mapStateToProps)(SlideAdultsEvent);
