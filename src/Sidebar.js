import React from 'react';
import { Link } from '@reach/router';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './visualUtils';

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.logo}>
          <img
            alt="logo"
            src="https://www.truckoo.com/img/logo_lightbg.72dba19b.svg"
          ></img>
        </Grid>
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
