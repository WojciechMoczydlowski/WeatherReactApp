import React from "react";
import { withStyles } from "@material-ui/core/styles";
import backgroundImg from "../img/sky.jpg";

function Background(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
const styles = theme => ({
  root: {      
    backgroundImage: `url(${backgroundImg})`,
    width:'100%',
    minHeight: '800px',
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    overflow: "hidden",
    opacity: "0.7",
    position: 'absolute',
    zIndex: "-10"
  }
});

export default withStyles(styles)(Background);
