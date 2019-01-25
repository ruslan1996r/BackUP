import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

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
      <div className="shop">
        <h2 className="shop-header">Магазин</h2>
        <ShopSlider />
        <Route path="/ShopsPage" component={ShopsPage} />
        <Link to={`/ShopsPage`}>
          <Button toTop={this.toTop} buttonName={'ДЕТАЛЬНІШЕ'} />
        </Link>
      </div>
    );
  }
}

export default Shop;
