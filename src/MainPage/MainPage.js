import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../styles/main.scss';

import {fetchTodayWeather} from '../actions/todayWeatherActions';
import {fetchLongTimeWeather,displayLongTimeWeather} from '../actions/longTimeWeatherActions';

import TodayWeather from './components/TodayWeather';
import OtherTownsWeather from './components/OtherTownsWeather';
import SearchPanel from './components/SearchPanel';
import NextDayWeather from './components/NextDayWeather';
import LongTermWeather from './components/LongTermWeather';
import Loading from './components/Loading';

class MainPage extends Component {

  componentDidMount(){
    //fetchTodayWeather();
    this.props.dispatch(fetchTodayWeather());
  }
  render() {
    const { todayWeather , loadingTodayWeather} = this.props;
    const { longTimeWeather,loadingLongTimeWeather,errorLongTimeWeather,displayLongTimeWeather} = this.props;
    console.log(longTimeWeather);
    return (
      <div className="main-page">
        { loadingTodayWeather ? (<Loading/>) :( <TodayWeather todayWeather = {todayWeather}/> )} 
        { loadingTodayWeather ? (<Loading/>) :( <NextDayWeather weather = {todayWeather}/>)} 
        { loadingTodayWeather ? (<Loading/>) :( <NextDayWeather weather = {todayWeather}/>)} 
        <OtherTownsWeather/>
        <SearchPanel/>
        { displayLongTimeWeather ? (<LongTermWeather/>) : <div/>}
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
  todayWeather: state.todayWeather.weather,
  loadingTodayWeather: state.todayWeather.loading,
  errorTodayWeather: state.todayWeather.error,

  longTimeWeather: state.longTimeWeather.weather,
  loadingLongTimeWeather: state.longTimeWeather.weather,
  errorLongTimeWeather: state.longTimeWeather.weather,
  displayLongTimeWeather: state.longTimeWeather.display,
});

export default connect(mapStateToProps,null)(MainPage);