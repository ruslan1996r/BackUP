import React, { Component } from 'react';
import {
  BrowserRouter as Route,
  Link,
} from 'react-router-dom';

import wwad from '../../format/shop/left-arrow.svg';

import ShopSlider from './ShopSlider';
import ShopsPage from '../../pages/ShopsPage/ShopsPage';
import Button from '../Button/Button';

import './Shop.css';

class Shop extends Component {
  toTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div id="shop-id" className="shop">
        <h2 className="shop-header">Магазин</h2>
        <ShopSlider />
        <Route path="/shop" component={ShopsPage} />
        <Link to={`/shop`}>
          <Button
            onClick={this.toTop}
            buttonName={'ДЕТАЛЬНІШЕ'}
          />
        </Link>
      </div>
    );
  }
}

export default Shop;
