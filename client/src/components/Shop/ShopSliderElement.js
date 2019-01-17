import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';

class ShopSliderElement extends Component {
  render() {
    return (
      <div>
        {this.props.shop.map((item, key) => {
          return (
            <div>
              <ul>
                <li>Назва: {item.name}</li>
                <li>{item.price}</li>
                <li>{item.size}</li>
                <li>{item.material}</li>
              </ul>
            </div>
          )
        })}
        <Button buttonName={'ПРИДБАТИ'} />
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
