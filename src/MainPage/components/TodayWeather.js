import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../styles/main.scss';

class TodayWeather extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="today-weather">
       MainWeather
      </div>
    );
  }
}
// const mapStateToProps = state =>({
//  // toDayWeather: state.we
// });

export default TodayWeather;