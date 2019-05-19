import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

import { fetchTodayWeather } from "../../../../redux/actions/todayWeatherActions";
import { fetchLongTimeWeather } from "../../../../redux/actions/longTimeWeatherActions";

import TodayWeather from "./components/TodayWeather";
import NextDayWeather from "./components/NextDayWeather";
import LongTermWeather from "./components/LongTermWeather";
import Loading from "./components/Loading";

class WeatherListing extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodayWeather("warsaw"));
    this.props.dispatch(fetchLongTimeWeather("warsaw"));
  }
  render() {
    const { classes } = this.props;
    const { todayWeather = {}, loadingTodayWeather } = this.props;
    const {
      longTimeWeather,
      loadingLongTimeWeather,
      errorLongTimeWeather,
    } = this.props;
   
    return (
      <div className={classes.root}>
        <TodayWeather
          loading={loadingTodayWeather}
          todayWeather = {todayWeather}
        />
        <NextDayWeather
          weather={longTimeWeather}
          loading={loadingLongTimeWeather}
          gridSpecifier={classes.nextDayWeatherUp}
        />
        <NextDayWeather
          weather={longTimeWeather}
          loading={loadingLongTimeWeather}
          gridSpecifier={classes.nextDayWeatherDown}
        />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    height: "650px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    justifyContent: "center",
    alignItem: "center",
    [theme.breakpoints.down("sm")]: {
      gridColumnStart: "2",
      gridColumnEnd: "3",
      gridRowStart: "1",
      gridRowEnd: "2"
    }
  },
  nextDayWeatherUp: {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "1",
    gridRowEnd: "2",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  nextDayWeatherDown: {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "2",
    gridRowEnd: "3",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

const mapStateToProps = state => ({

  todayWeather: state.todayWeather.weather,
  loadingTodayWeather: state.todayWeather.loading,
  errorTodayWeather: state.todayWeather.error,

  longTimeWeather: state.longTimeWeather.weather,
  loadingLongTimeWeather: state.longTimeWeather.loading,
  errorLongTimeWeather: state.longTimeWeather.error,
  displayLongTimeWeather: state.longTimeWeather.display
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withStyles(styles)
)(WeatherListing);
