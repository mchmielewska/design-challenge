import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useStyles, palette } from './visualUtils';
import { TextField, Button, Box, Grid } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.blue60,
    },
  },
});

const SearchField = (props) => {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <Grid item className={classes.searchContainer}>
        <form noValidate autoComplete="off">
          <Box className={classes.formRoot}>
            <TextField
              id="searchInput"
              label="Search"
              variant="outlined"
              color="primary"
              className={classes.inputField}
            />
            <Button className={classes.menuButton}>Search</Button>
          </Box>
        </form>
      </Grid>
    </ThemeProvider>
  );
};

export default SearchField;
