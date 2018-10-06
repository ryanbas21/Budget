import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: "#B2DFDB"
  },
  barColorPrimary: {
    backgroundColor: "#00695C"
  }
});

function Loading(props) {
  const { classes } = props;
  return (
    <LinearProgress
      size={100}
      className={{
        colorPrimary: classes.colorPrimary,
        barColorPrimary: classes.barColorPrimary
      }}
      style={{ color: purple[500] }}
      thickness={10}
    />
  );
}

export default withStyles(styles)(Loading);
