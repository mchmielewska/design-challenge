import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Paper, Box, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ADC1CB",
  },
  backgroundDark: {
    backgroundColor: "#85A3B2",
    color: "#EBF0F2",
    textTransform: "uppercase",
    letterSpacing: 5,
    margin: 0,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: "bold",
  },
  tag: {
    backgroundColor: "#85A3B2",
    color: "#EBF0F2",
    textTransform: "uppercase",
    letterSpacing: 5,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagsContainer: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
});

const SingleCard = (props) => {
  const classes = useStyles();
  const tags = props.tags
    ? props.tags.map((tag) => {
        const tagKey = "tag" + { tag } + Math.random().toString();
        return (
          <span key={tagKey} className={classes.tag}>
            {tag}
          </span>
        );
      })
    : null;
  return (
      <Grid item lg={4} md={6} xs={12}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="truck" image={props.imageSrc} title="Truck" />
        <CardContent>
          <Paper square className={classes.backgroundDark}>
            {props.offerName}
          </Paper>
          <Box className={classes.tagsContainer}>{tags}</Box>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
      </Grid>

  );
};

export default SingleCard;
