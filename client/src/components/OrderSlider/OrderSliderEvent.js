import React, { Component } from 'react';
import { connect } from 'react-redux';


class OrderSliderEvent extends Component {
  
  render() {
    
    return (
      <div  className='order-slider'>
        {this.props.orderList.map((item, key) => {
          return (
            <div>
                <img src={item.img} alt='фото' />
                <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList: state.indexData.orderList //данные для OrderSliderEvent
  };
}


export default connect(mapStateToProps)(OrderSliderEvent);
