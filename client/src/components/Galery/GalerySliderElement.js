import React, { Component } from 'react';
import { connect } from 'react-redux';


class GalerySliderElement extends Component {
  render() {
    return (
      <div className='gallery'>
        {this.props.gallery.map((item, key) => {
          return (
            <div>
                <img src={item.photo} alt='галерея' />
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.indexData.gallery //данные для GalerySliderElement
  };
}


export default connect(mapStateToProps)(GalerySliderElement);