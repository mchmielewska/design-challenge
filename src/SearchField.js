import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { useStyles, palette } from "./visualUtils";
import { TextField, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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
      <div className="searchContainer">
        <form className={classes.formRoot} noValidate autoComplete="off">
          <TextField
            id="searchInput"
            label="Search"
            variant="outlined"
            color="primary"
            className={classes.inputField}
          />
          <Button className={classes.menuButton}>Search</Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default SearchField;
