import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    'inputField input': {
        padding: 10
    }
  },
}));

const SearchField = (props) => {
  const classes = useStyles();
  return (
    <div className="searchContainer">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="searchInput" label="Search" variant="outlined" color="primary" className={classes.inputField}/>
        <Button variant="outlined">Search</Button>
      </form>
    </div>
  );
};

export default SearchField;
