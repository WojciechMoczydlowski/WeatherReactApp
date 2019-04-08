import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/main.scss';

import {getTodayWeather} from './services/weatherService'
import MainWeather from './components/TodayWeather';
import OtherTownsWeather from './components/OtherTownsWeather';
import SearchPanel from './components/SearchPanel';
import SubWeather from './components/SubWeather';
import LongTermWeather from './components/LongTermWeather';

class MainPage extends Component {

  componentDidMount(){
    const weather = getTodayWeather();
    console.log(weather);
  }

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