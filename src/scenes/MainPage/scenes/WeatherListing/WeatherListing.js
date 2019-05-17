import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

import { fetchTodayWeather } from "../../../../redux/actions/todayWeatherActions";

import TodayWeather from "./components/TodayWeather";
import NextDayWeather from "./components/NextDayWeather";
import LongTermWeather from "./components/LongTermWeather";
import Loading from "./components/Loading";

class WeatherListing extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodayWeather("warsaw"));
  }
  render() {
    const { todayWeather, loadingTodayWeather } = this.props;
    const {classes} = this.props;
    console.log(todayWeather);
    const {
      longTimeWeather,
      loadingLongTimeWeather,
      errorLongTimeWeather,
      displayLongTimeWeather
    } = this.props;
    return (
      <div className = {classes.root}>
        {loadingTodayWeather ? (
          <Loading />
        ) : (
          <TodayWeather weather={todayWeather} />
        )}
        {loadingTodayWeather ? (
          <Loading />
        ) : (
          <NextDayWeather weather={longTimeWeather} />
        )}
        {loadingLongTimeWeather ? (
          <Loading />
        ) : (
          <NextDayWeather weather={todayWeather} />
        )}
        {/* <OtherTownsWeather/> */}

        {displayLongTimeWeather ? <LongTermWeather /> : <div />}
      </div>
    );
  }
}

const styles = theme => ({
    root: {
      zIndex: "5"
    }
  });

const mapStateToProps = state => ({
  todayWeather: state.todayWeather.weather,
  loadingTodayWeather: state.todayWeather.loading,
  errorTodayWeather: state.todayWeather.error,

  longTimeWeather: state.longTimeWeather.weather,
  loadingLongTimeWeather: state.longTimeWeather.weather,
  errorLongTimeWeather: state.longTimeWeather.weather,
  displayLongTimeWeather: state.longTimeWeather.display
});

export default compose(
    connect(
      mapStateToProps,
      null,
    ),
    withStyles(styles)
  )(WeatherListing);
  
