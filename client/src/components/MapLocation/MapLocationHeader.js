import React, { Component } from 'react';
import { connect } from 'react-redux';

class MapLocationHeader extends Component {
  render() {
    return (
      <div>
        <p>{this.props.info.address}</p>
        <p>{this.props.info.phoneNumber}</p>
        <p>{this.props.info.email}</p>
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