import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import Button from '../Button/Button';
import ModalArtOrder from '../ModalArtOrder/ModalArtOrder';
import { buySubmit } from '../../redux/actions/indexPage';

class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      isOrdered: false,
      selectedArtName: '',
    };
  }

  handleOpenModal = (art) => {
    this.setState({
      isModalVisible: true,
      selectedArtName: art.name,
    });
    console.log('inside handleOpenModal');
  };

  onSubmitModal = (name, phone, email, address) => {
    console.log(name, phone, email, address);
    let id = 3;
    // actionCreator('OTPRAVIT_NA_SERVAK', payload: {name, email, feedbackText})
    buySubmit(id, name, phone, email, address);
    this.setState({
      isOrdered: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false,
      isOrdered: false,
    });
  };
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="shop-slider">
        {/* <div className="main-div"> */}
        <Slider {...settings}>
          {this.props.shop.map((item, key) => {
            return (
              <div className="shop-slider-element">
                <p>{item.name}</p>
                <ul>
                  <li>
                    <div className="descr">
                      <div className="information-of-element">
                        <p>Розмір: {item.size}</p>
                        <p>Матеріал: {item.material}</p>
                      </div>
                      <Button
                        className="shop-more-details"
                        buttonName={'ПРИДБАТИ'}
                        onClick={() => {
                          this.handleOpenModal(item);
                        }}
                      />
                    </div>
                    <img src={item.image} alt="Картинка" />
                  </li>
                </ul>
                <p className="element-price">
                  Ціна: {item.price}
                </p>
              </div>
            );
          })}
        </Slider>
        <ModalArtOrder
          visible={this.state.isModalVisible}
          isOrdered={this.state.isOrdered}
          onSubmit={this.onSubmitModal}
          onClose={this.onCloseModal}
          artName={this.state.selectedArtName}
        />
        <div className="main-div" />
      </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shop: state.indexData.shop, //данные для SimpleSlider
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySubmit: (id, name, email, phone, address) => {
      dispatch(buySubmit(id, name, email, phone, address));
    }, //данные для SimpleSlider
  };
};

//ЗАКОНСОЛЬЛОЖИТЬ ГЕЕВ

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleSlider);
