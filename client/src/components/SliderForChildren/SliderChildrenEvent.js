import React, { Component } from 'react';
import { connect } from 'react-redux';

class SliderChildrenEvent extends Component {
  render() {
    return (
      <div className='slider-for-children-event'>
        {this.props.chldrenPainting.map((item, key) => {
          return (
            <div className='children-event'>
              <ul>
                <li>
                  <div className='descr-children-event'>
                    <p>{item.time}</p>
                    <p>{item.cost}</p>
                  </div>
                  <img src={item.picture} alt='Картинка' />
                </li>
              </ul>
              <p>{item.weekDay}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chldrenPainting: state.indexData.chldrenPainting //данные для SliderChildrenEvent
  };
}


export default connect(mapStateToProps)(SliderChildrenEvent);
