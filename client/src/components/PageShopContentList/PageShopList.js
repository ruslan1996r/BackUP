import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';


class PageShopList extends Component {
  render() {
    console.log("DAWFWAWGAFWG");
    console.log(this.props.goods);
    
    return (
      <div className='page-shop-slider'>
        {this.props.goods.map((item, key) => {
          return (
            <div className='page-shop-slider-element'>
              <p className='header-shop-page-text'>{item.name}</p>
              <ul>
                <li>
                  <div className="descr">
                    <div className='information-of-element'>
                      <p>Розмір: {item.size}</p>
                      <p>Матеріал: {item.material}</p>
                    </div>
                    <Button
                      className='shop-more-details'
                      buttonName={'ПРИДБАТИ'}
                    />
                  </div>
                  <img src={item.image} alt='Картинка' />
                </li>
              </ul>
              <p className='element-price'>Ціна: {item.price}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.shopData.goods //данные для PageShopList
  };
}

export default connect(mapStateToProps)(PageShopList);
