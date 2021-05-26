import React from "react";
import SingleCard from "./SingleCard";
import { Grid } from "@material-ui/core";
import { useStyles } from "./visualUtils"

const Cards = (props) => {
    const classes = useStyles();
  const cardsData = props.cardsData;
  const cards = cardsData.map((card) => <SingleCard key={card.id} {...card} />);

  return (
      <Grid container spacing={3} className={classes.cardsContainer}>
        {cards}
      </Grid>
  );
};

export default Cards;
