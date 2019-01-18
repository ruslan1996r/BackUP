import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlideAdultsEvent extends Component {
  render() {
    return (
      <div className='slider-for-adults-event'>
       {this.props.adultPainting.map((item, key)=>{
         return(
          <div >
              <ul>
                <li>{item.name}</li>
                <li>{item.time}</li>
                <li>{item.cost}</li>
              </ul>
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