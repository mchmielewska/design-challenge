import React from 'react';
import { Router } from '@reach/router';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

import { Grid, Container } from '@material-ui/core';
import { useStyles } from './visualUtils';

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.appRoot}>
      <Grid container>
        <Grid item className={classes.sidebarContainer} lg={2} md={3} xs={12}>
          <Sidebar />
        </Grid>
        <Grid item className={classes.dashboardContainer} lg={10} md={9} xs={12}>
          <Router>
            <Dashboard path="/" />
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
