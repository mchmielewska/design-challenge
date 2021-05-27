import React from 'react';
import SearchField from './SearchField';
import SortField from './SortField';
import { Grid } from '@material-ui/core';
import { useStyles } from './visualUtils';

const Menu = (props) => {
  const classes = useStyles();
  
  return (
    <Grid className={classes.menuContainer}>
      <SearchField />
      <SortField />
    </Grid>
  );
};

export default Menu;
