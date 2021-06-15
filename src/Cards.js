import React from 'react';
import SingleCard from './SingleCard';

const Cards = (props) => {
  const cardsData = props.cardsData;
  const cards = cardsData.map((card) => <SingleCard key={card.id} {...card} />);

  return <div className="cardsContainer">{cards}</div>;
};

export default Cards;
