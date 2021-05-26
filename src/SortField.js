import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./visualUtils";

const SortField = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.sortContainer}>
      <span>Sort</span>
      <Button className={classes.menuButton}>Publishing date</Button>
    </div>
  );
};

export default SortField;
