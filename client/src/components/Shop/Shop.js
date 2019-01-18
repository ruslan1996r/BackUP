import React, { Component } from 'react';
import Button from '../Button/Button';

import ShopSlider from './ShopSlider';

import './Shop.css'

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <h2>Магазин</h2>
        <ShopSlider />
        
        <Button buttonName={'ДЕТАЛЬНІШЕ'} />
      </div>
    );
  }
}

export default Shop;
