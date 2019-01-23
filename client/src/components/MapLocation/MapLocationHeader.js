import React, { Component } from 'react';
import { connect } from 'react-redux';

class MapLocationHeader extends Component {
  render() {
    return (
      <div className='container-map'>
        <div className='map-location-header'>
          <p>{this.props.info.address}</p>
          <p>{this.props.info.phoneNumber}</p>
          <p>{this.props.info.email}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.indexData.info //данные для MapLocationHeader
  };
}


export default connect(mapStateToProps)(MapLocationHeader);