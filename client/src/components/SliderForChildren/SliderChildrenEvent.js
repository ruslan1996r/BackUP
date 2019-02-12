import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class SliderChildrenEvent extends Component {
  render() {
    let width = window.innerWidth;
    let changeWidth;
    if (width <= 650) {
      changeWidth = 1;
    } else {
      changeWidth = 2;
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
      <div className="slider-for-children-event">
        <Slider {...settings}>
          {this.props.chldrenPainting.map((item, key) => {
            return (
              <div className="children-event">
                <ul>
                  <li>
                    <div className="descr-children-event">
                      <p className="cost-time-p">
                        {item.time}
                      </p>
                      <p className="cost-time-p">
                        {item.cost}
                      </p>
                    </div>
                    <img
                      src={item.picture}
                      alt="Картинка"
                    />
                  </li>
                </ul>
                <p>{item.weekDay}</p>
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
    chldrenPainting: state.indexData.chldrenPainting, //данные для SliderChildrenEvent
  };
};

export default connect(mapStateToProps)(
  SliderChildrenEvent,
);
