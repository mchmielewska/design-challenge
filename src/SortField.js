import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './visualUtils';

const SortField = (props) => {
  const classes = useStyles();
  
  return (
    <Grid item className={classes.sortContainer}>
      <span>Sort</span>
      <Button className={classes.menuButton}>Publishing date</Button>
    </Grid>
  );
};

export default SortField;
