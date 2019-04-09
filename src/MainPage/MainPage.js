import React, { Component } from 'react';
import {connect} from 'react-redux';

import {setTodayWeather} from '../actions/weatherActions';

import '../styles/main.scss';

import {getTodayWeather} from './services/weatherService'
import TodayWeather from './components/TodayWeather';
import OtherTownsWeather from './components/OtherTownsWeather';
import SearchPanel from './components/SearchPanel';
import SubWeather from './components/SubWeather';
import LongTermWeather from './components/LongTermWeather';

class MainPage extends Component {

  componentDidMount(){
    fetchTodayWeather();
    console.log(this.props.todayWeather);
  }

  render() {
    return (
      <div className="main-page" onClick = {() => fetchTodayWeather()}>
        <TodayWeather/>
        <OtherTownsWeather/>
        <SearchPanel/>
        <SubWeather/>
        <LongTermWeather/>
      </div>
    );
  }
}

async function fetchTodayWeather() {
  const weather = await getTodayWeather();
  console.log(weather);
  setTodayWeather(weather);
}

const mapStateToProps = state =>({
 todayWeather: state.weather.todayWeather,
});

export default connect(mapStateToProps,{setTodayWeather})(MainPage);;