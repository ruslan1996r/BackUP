import React, { Component } from 'react';
import GalerySlider from './GalerySlider';

import './Galery.css';

class Galery extends Component {
  render() {
    return (
      <div
        id="gallery-and-header-id"
        className="gallery-and-header"
      >
        <h2 className="gallery-header">Галерея</h2>
        <GalerySlider />
      </div>
    );
  }
}

export default Galery;
