import React from "react";
import { Link } from "@reach/router";
import { Card, Paper, Box, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useStyles } from "./visualUtils";

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
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="truck"
            image={props.imageSrc}
            title="Truck"
          />
          <CardContent>
            <Link to={"/" + props.id} className="offerLink">
              <Box className={classes.offerHeading}>{props.offerName}</Box>
            </Link>
            <Box className={classes.tagsContainer}>{tags}</Box>
            <Box className={classes.offerDetails}>
              <Link to={"/" + props.id} className="offerLink">
                <span className={classes.details}>Offer ID: {props.id}</span>
              </Link>
              <Link to={"/" + props.id} className="offerLink">
                <span className={classes.details}>{props.location}</span>
              </Link>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.fullWidthContainer}>
          <Button className={classes.fullWidthButton}>
            Ask price <span className={classes.bold}>XYZ €</span>
          </Button>
          <Button className={classes.fullWidthButton}>
            Currently highest offer {props.currentOffer} €
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleCard;
