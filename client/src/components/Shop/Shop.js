import React, { Component } from 'react';

import Button from '../Button/Button';
import ShopSlider from './ShopSlider';

import './Shop.css'

class Shop extends Component {
  render() {
    return (
      <div>
        <Button buttonName={'ДЕТАЛЬНІШЕ'} />
        <ShopSlider />
      </div>
    );
  }
}

export default Shop;
