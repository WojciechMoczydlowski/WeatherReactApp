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

const TodayWeather = props => {
  const { classes, weather } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Warsaw" subheader="September 14, 2016" />
        <div className={classes.flexWrapper}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              TodayWeather
            </Typography>
            <SearchIcon />
          </CardContent>
          <CardContent>
          <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              TodayWeather
            </Typography>
            <SearchIcon />
          </CardContent>
          <CardContent>
          <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              TodayWeather
            </Typography>
            <SearchIcon />
          </CardContent>
        </div>
     
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            4C
          </Typography>
          <CardMedia
          className={classes.media}
          title="Paella dish"
        />
         
       
        <CardActions className={classes.displayMoreDays}>
          <Button size="small">More days</Button>
        </CardActions>
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
    position: 'relative',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  displayMoreDays:{
    positon:'absolute',
    bottom: '5px',
  }
});

TodayWeather.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodayWeather);
