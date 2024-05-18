// Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  header: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, header, description }) => {
  return (
    <div className="card">
      <img src={image} alt={header} className="card-image" />
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
