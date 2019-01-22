import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlideAdultsEvent extends Component {
  render() {
    return (
      <div className='slider-for-adults-event'>
        {this.props.adultPainting.map((item, key) => {
          return (
            <div className='adults-event'>
              <ul>
                <li>
                  <div className='descr-event'>
                    <p className='cost-time-p'>{item.time}</p>
                    <p className='cost-time-p'>{item.cost}</p>
                  </div>
                  <img src={item.painting} alt='Картинка' />
                </li>
              </ul>
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
    adultPainting: state.indexData.adultPainting //данные для SlideAdultsEvent
  };
}


export default connect(mapStateToProps)(SlideAdultsEvent);