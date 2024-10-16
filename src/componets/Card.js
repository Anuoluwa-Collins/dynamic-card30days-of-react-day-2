// Card.js
import React from 'react';

const Card = ({ image, title, description, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="rating">Rating: {rating} / 5</div>
      <button className="book-now">Book Now</button>
    </div>
  );
};

export default Card;
