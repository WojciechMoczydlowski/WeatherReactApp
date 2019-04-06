import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/main.scss'

import MainWeather from './MainWeather';
import OtherTownsWeather from './OtherTownsWeather';
import SearchPanel from './SearchPanel';
import SubWeather from './SubWeather';
import LongTermWeather from './LongTimeWeather';

class MainPage extends Component {
  render() {
    return (
      <div className="search-panel">
        <MainWeather/>
        <OtherTownsWeather/>
        <SearchPanel/>
        <SubWeather/>
        <LongTermWeather/>
      </div>
    );
  }
}


export default MainPage;