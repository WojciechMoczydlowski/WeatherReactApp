import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "./Loading";
const TodayWeather = props => {
  const { classes } = props;
  const { loading } = props;
  const { todayWeather } = props;
  let {
    name: cityName = "Cracov",
    clouds: { all: clouds } = { all: 50 },
    wind: { speed: wind } = { speed: 0 },
    main: { temp: temperature, pressure } = { temp: 275, pressure: 0 },
    weather: [{ icon }] = [{ icon: "10d" }],
    dt: date = 0
  } = todayWeather;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <CardHeader title={cityName} subheader={timeConverter(date)} />
            <div className={classes.flexWrapper}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {clouds} %
                </Typography>
                <SearchIcon />
              </CardContent>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {wind} m/s
                </Typography>
                <SearchIcon />
              </CardContent>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {pressure} hPa
                </Typography>
                <SearchIcon />
              </CardContent>
            </div>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              { Math.round(temperature - 273.15)} &#176;C
            </Typography>
                <img alt = "icon" src ={`http://openweathermap.org/img/w/${icon}.png`}/>
            <CardActions className={classes.displayMoreDays}>
              <Button size="small">More days</Button>
            </CardActions>
          </React.Fragment>
        )}
      </Card>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    margin: "0",
    width: "90%",
    height: "95%",
    justifySelf: "center",
    alignSelf: "end",
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "1",
    gridRowEnd: "3",
    [theme.breakpoints.down("sm")]: {
      gridColumnStart: "1",
      gridColumnEnd: "3",
      gridRowStart: "1",
      gridRowEnd: "3"
    }
  },
  card: {
    position: "relative"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  displayMoreDays: {
    positon: "absolute",
    bottom: "5px"
  }
});

TodayWeather.propTypes = {
  classes: PropTypes.object.isRequired
};

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year + " ";
  return time;
}

export default withStyles(styles)(TodayWeather);
