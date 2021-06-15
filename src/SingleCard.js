import React from 'react';
import { Link } from '@reach/router';

const SingleCard = (props) => {
  const tags = props.tags
    ? props.tags.map((tag) => {
        if (tag !== '') {
          const tagKey = 'tag' + { tag } + Math.random().toString();
          return (
            <span key={tagKey} className="tag">
              {tag}
            </span>
          );
        }
      })
    : null;

  const backgroundImage = 'url(' + props.vehicle_picture_front + ')';
  return (
    <div className="root">
      <div className="card">
        <div
          alt="truck"
          className="offerImage card-media"
          style={{ backgroundImage: backgroundImage }}
          title="Truck"
        />
        <div className="card-content">
          <Link to={'/' + props.uid} className="offerLink">
            <div className="offerHeading">{props.title}</div>
          </Link>
          <div className="tagsContainer">{tags}</div>
          <div className="offerDetails">
            <Link to={'/' + props.uid} className="offerLink">
              <span className="details">{props.shortCode}</span>
            </Link>
            <Link to={'/' + props.uid} className="offerLink">
              <span className="details">{props.location}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="fullWidthContainer">
        <button className="fullWidthButton">
          Ask price &nbsp; <span className="bold">{props.askPrice} €</span>
        </button>
        <button className="fullWidthButton">
          Currently highest offer &nbsp;{' '}
          <span className="bold">{props.highestBid} €</span>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
