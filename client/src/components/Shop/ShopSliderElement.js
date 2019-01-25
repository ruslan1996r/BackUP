import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';

class ShopSliderElement extends Component {
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
                    <Button className="shop-more-details" buttonName={'ПРИДБАТИ'} />
                  </div>
                  <img src={item.image} alt="Картинка" />
                </li>
              </ul>
              <p className="element-price">Ціна: {item.price}</p>
            </div>
          );
        })}
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
