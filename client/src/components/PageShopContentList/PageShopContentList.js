import React, { Component } from 'react';

import './PageShopContentList.css';
import Button from '../../components/Button/Button';
import PageShopList from './PageShopList'

class PageShopContentList extends Component {
  render() {
    return (
      <div className='page-shop-container'>
        <PageShopList className='shop-list-element'/>
        <Button 
        className='shop-page-button'
        buttonName={'БІЛЬШЕ'}/>
      </div>
    );
  }
}

export default PageShopContentList;
