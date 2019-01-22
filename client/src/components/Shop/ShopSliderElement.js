import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';

import photo from '../../format/shop/shop-example1.jpg'

class ShopSliderElement extends Component {
  render() {
    return (
      <div className='shop-slider'>
        {this.props.shop.map((item, key) => {
          return (

            <div className='shop-slider-element'>
              <p>Назва: {item.name}</p>
              <ul>
                <li>
                <div className="descr">
                  <p>Вартість: {item.price}</p>
                  <p>Розрім: {item.size}</p>
                  <p>Матеріал: {item.material}</p>
                  <Button buttonName={'ПРИДБАТИ'} />
                </div>
                <img src={photo} alt='Картинка'/>
                </li>
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
