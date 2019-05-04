import React, { Component } from 'react';
import '../../styles/main.scss';


class TodayWeather extends Component {

  render() {
    const weather = this.props.todayWeather;
    console.log(weather);
    return(
      <div className="today-weather">
        todayWeather
        {/* {this.props.todayWeather} */}
      </div>
    );
  }
}


export default TodayWeather;