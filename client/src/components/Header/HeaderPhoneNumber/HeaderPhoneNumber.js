import React, { Component } from 'react';
import { connect } from 'react-redux';


import './HeaderPhoneNumber.css'

class HeaderPhoneMenu extends Component {
  render() {
    return (
      <div className='header-number'>
        {this.props.phoneNumber}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    phoneNumber: state.indexData.phoneNumber //данные для HeaderPhoneMenu
  };
}

export default connect(mapStateToProps)(HeaderPhoneMenu);
