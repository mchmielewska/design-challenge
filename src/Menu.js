import React from "react";
import SearchField from "./SearchField";
import SortField from "./SortField";
import { Box } from "@material-ui/core";
import { useStyles } from "./visualUtils";

const Menu = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.menuContainer}>
      <SearchField />
      <SortField />
    </Box>
  );
};

export default Menu;
