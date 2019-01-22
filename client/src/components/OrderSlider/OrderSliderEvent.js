import React, { Component } from 'react';
import { connect } from 'react-redux';


class OrderSliderEvent extends Component {
  
  render() {
    
    return (
      <div  className='order-slider'>
        {this.props.orderList.map((item, key) => {
          return (
            <div className='slider-event'>
                <img src={item.img} alt='Картинка' />
                <p className='event-name'>{item.name}</p>
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
