import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class OrderSliderEvent extends Component {
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
      <div className="order-slider">
        <Slider {...settings}>
          {this.props.orderList.map((item, key) => {
            return (
              <div className="slider-event">
                <ul>
                  <li>
                    <div className="descr-order">
                      <p className="cost-time-p">
                        Вартість: {item.price}
                      </p>
                    </div>
                    <img src={item.img} alt="Картинка" />
                  </li>
                </ul>
                <p className="event-name">{item.name}</p>
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
    orderList: state.indexData.orderList, //данные для OrderSliderEvent
  };
};

export default connect(mapStateToProps)(OrderSliderEvent);
