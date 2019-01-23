import React, { Component } from 'react';
import MapLocationHeader from './MapLocationHeader';

import './MapLocation.css'

class MapLocation extends Component {
  render() {
    return (
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.73539584151!2d28.473275577645396!3d49.23397444156959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7c79857565%3A0x5ea29449f31e9173!2zVGhlIEZvcm1hdCDQodGC0YPQtNGW0Y8g0LbQuNCy0L7Qv9C40YHRgw!5e0!3m2!1sru!2sua!4v1548172480536" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>

          <MapLocationHeader />
      
      </div>
    );
  }
}

export default MapLocation;
