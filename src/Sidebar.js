import React from "react";
import { Link } from "@reach/router";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./visualUtils"

const Sidebar = (props) => {
    const classes = useStyles();
  return (
    <div >
      <Grid container spacing={1} >
        <Grid item xs={12}>
          <Button className={classes.fullWidth}>Dashboard</Button>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.fullWidth}>Logout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
