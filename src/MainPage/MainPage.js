import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchTodayWeather} from '../actions/todayWeatherActions';

import '../styles/main.scss';

import TodayWeather from './components/TodayWeather';
import OtherTownsWeather from './components/OtherTownsWeather';
import SearchPanel from './components/SearchPanel';
import SubWeather from './components/SubWeather';
import LongTermWeather from './components/LongTermWeather';

class MainPage extends Component {

  componentDidMount(){
    //fetchTodayWeather();
    this.props.dispatch(fetchTodayWeather());
  }

 

  render() {
    
    return (
      <div className="main-page">
        <TodayWeather/>
        <OtherTownsWeather/>
        <SearchPanel/>
        <SubWeather/>
        <LongTermWeather/>
      </div>
    );
  }
}
  //  function fetchTodayWeather() {
  //  return function(dispatch){

  //   dispatch(todayWeatherRequest());
  //   //const weather = await getTodayWeather();
  //   const weather = {};
  //  // dispatch(todayWeatherSuccess(weather));
  //   console.log(weather);

  //  }

// }


const mapStateToProps = state =>({
 todayWeather: state.todayWeather.todayWeather,
});

export default connect(mapStateToProps,null)(MainPage);