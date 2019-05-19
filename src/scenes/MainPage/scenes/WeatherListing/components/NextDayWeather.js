import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loading from "./Loading";

const NextDayWeather = props => {
  const { classes, weather, gridSpecifier } = props;
  const {loading} = props;
  const rootClasses = `${classes.root} ${gridSpecifier}`
  return (
    <div className={rootClasses}>
      <Card className={classes.card}>
      {loading ? (
      <Loading />
        ) : (
          <React.Fragment>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            NextDayWeather
          </Typography>
          <Typography variant="h5" component="h2" />
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        </React.Fragment>)}
      </Card>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    margin: "0",
    width: "90%",
    height: "90%",
    justifySelf: "center",
    alignSelf: "end"
  },
  card: {},
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
  }
});

NextDayWeather.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NextDayWeather);
