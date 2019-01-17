import { connect } from 'react-redux';


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

import {init} from '../../redux/actions/actionTypes'; //actionCreator

class IndexPage extends Component {
  componentDidMount(){ //запускает actionCreator
    this.props.initData();
  }
  render() {
    let d = this.props.indexData; //get state from Redux
    console.log("d: ", d);
    return (
      <div className='mainWindow'>
      {d.testjson} 
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

const mapStateToProps = (state) => { 
  return {
    indexData: state.indexData //данные для IndexPage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    initData: () => {
      dispatch(init())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
