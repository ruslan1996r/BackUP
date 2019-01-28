import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import ModalArtOrder from '../ModalArtOrder/ModalArtOrder';

class ShopSliderElement extends Component {
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

  onSubmitModal = (name, phone, address) => {
    console.log(name, phone, address);
    // actionCreator('OTPRAVIT_NA_SERVAK', payload: {name, email, feedbackText})
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
    return (
      <div className="shop-slider">
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
        <ModalArtOrder
          visible={this.state.isModalVisible}
          isOrdered={this.state.isOrdered}
          onSubmit={this.onSubmitModal}
          onClose={this.onCloseModal}
          artName={this.state.selectedArtName}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shop: state.indexData.shop, //данные для ShopSliderElement
  };
};

export default connect(mapStateToProps)(ShopSliderElement);
