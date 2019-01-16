import React, { Component } from 'react';
import Header from '../../components/Header/Header/Header'
import SliderForAdults from '../../components/SliderForAdults/SliderForAdults'
import SliderForChildren from '../../components/SliderForChildren/SliderForChildren'
import WorldEyeArtist from '../../components/WorldEyeArtist/WorldEyeArtist'
import OrderSlider from '../../components/OrderSlider/OrderSlider'
import Galery from '../../components/Galery/Galery'
import Shop from '../../components/Shop/Shop'
import Reviews from '../../components/Reviews/Reviews'
import MapLocation from '../../components/MapLocation/MapLocation'
import Footer from '../../components/Footer/Footer'

import './IndexPage.css'

class IndexPage extends Component {
  render() {
    return (
      <div className='mainWindow'>
        Main window
        <Header />
        <SliderForAdults />
        <SliderForChildren />
        <WorldEyeArtist />
        <OrderSlider />
        <Galery />
        <Shop />
        <Reviews />
        <MapLocation />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
