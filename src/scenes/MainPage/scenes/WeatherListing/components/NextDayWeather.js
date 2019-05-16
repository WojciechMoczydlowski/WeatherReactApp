import React, { Component } from "react";

class NextDayWeather extends Component {
  render() {
    console.log(this.props.weather);
    return <div className="sub-weather">SubWeather</div>;
  }
}

export default NextDayWeather;
