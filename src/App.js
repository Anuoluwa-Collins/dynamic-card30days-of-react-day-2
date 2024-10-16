// App.js
import React from 'react';
import Card from './componets/Card';
import './App.css';

// Importing local images
import cabinImg from './componets/assets/cabin.jpg';
import beachHouseImg from './componets/assets/baechhouse.jpg';
import mountainLodgeImg from './componets/assets/mountain.jpg';
import lakefrontCottageImg from './componets/assets/lakeside.jpg';

const App = () => {
  const cardData = [
    {
      image: cabinImg,
      title: 'Cabin in the Woods',
      description: 'A cozy cabin surrounded by nature and fresh air. Perfect for a peaceful retreat.',
      rating: 4.5
    },
    {
      image: beachHouseImg,
      title: 'Beach House',
      description: 'A beautiful beach house with stunning views of the ocean, ideal for a summer vacation.',
      rating: 4.8
    },
    {
      image: mountainLodgeImg,
      title: 'Mountain Lodge',
      description: 'A luxurious lodge nestled in the mountains, offering the ultimate adventure experience.',
      rating: 4.7
    },
    {
      image: lakefrontCottageImg,
      title: 'Lakefront Cottage',
      description: 'A charming cottage right on the lake, perfect for fishing and relaxation.',
      rating: 4.6
    }
  ];

  return (
    <div className="card-container">
      {cardData.map((data, index) => (
        <Card 
          key={index} 
          image={data.image} 
          title={data.title} 
          description={data.description} 
          rating={data.rating}
        />
      ))}
    </div>
  );
};

export default App;
