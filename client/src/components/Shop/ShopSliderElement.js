import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';

class ShopSliderElement extends Component {
  render() {
    return (
      <div className='shop-slider-element'>
        {this.props.shop.map((item, key) => {
          return (
            <div>
              <ul>
                <li>Назва: {item.name}</li>
                <li>Вартість: {item.price}</li>
                <li>Розрім: {item.size}</li>
                <li>Матеріал: {item.material}</li>
                <Button buttonName={'ПРИДБАТИ'} />
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shop: state.indexData.shop //данные для ShopSliderElement
  };
}


export default connect(mapStateToProps)(ShopSliderElement);
