import React from 'react';
import { Link } from '@reach/router';
import { Card, Box, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { useStyles } from './visualUtils';

const SingleCard = (props) => {
  const classes = useStyles();
  const tags = props.tags
    ? props.tags.map((tag) => {
        const tagKey = 'tag' + { tag } + Math.random().toString();
        return (
          <span key={tagKey} className={classes.tag}>
            {tag}
          </span>
        );
      })
    : null;

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={classes.root}>
        <CardActionArea className={classes.offerImage}>
          <CardMedia
            component="img"
            alt="truck"
            image={props.imageSrc}
            title="Truck"
          />
          <CardContent>
            <Link to={'/' + props.id} className="offerLink">
              <Box className={classes.offerHeading}>{props.offerName}</Box>
            </Link>
            <Box className={classes.tagsContainer}>{tags}</Box>
            <Box className={classes.offerDetails}>
              <Link to={'/' + props.id} className="offerLink">
                <span className={classes.details}>Offer ID: {props.id}</span>
              </Link>
              <Link to={'/' + props.id} className="offerLink">
                <span className={classes.details}>{props.location}</span>
              </Link>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.fullWidthContainer}>
          <Button className={classes.fullWidthButton}>
            Ask price &nbsp; <span className={classes.bold}>XYZ €</span>
          </Button>
          <Button className={classes.fullWidthButton}>
            Currently highest offer &nbsp; <span className={classes.bold}>{props.currentOffer} €</span>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleCard;
