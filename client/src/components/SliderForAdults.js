import React, { Component } from 'react';
import Header from '../components/Header'
import SliderForAdults from '../components/SliderForAdults'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SliderForAdults />
      </div>
    );
  }
}

export default IndexPage;
