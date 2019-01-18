import React, { Component } from 'react';
import { connect } from 'react-redux';

class SliderChildrenEvent extends Component {
  render() {
    return (
      <div className='slider-for-children-event'>
        {this.props.chldrenPainting.map((item, key)=>{
         return(
          <div>
              <ul>
                <li>{item.weekDay}</li>
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
        chldrenPainting: state.indexData.chldrenPainting //данные для SliderChildrenEvent
      };
    }
    
    
    export default connect(mapStateToProps)(SliderChildrenEvent);
