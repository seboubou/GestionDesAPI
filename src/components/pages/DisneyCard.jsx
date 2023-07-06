import React from 'react';

const DisneyCard = ({ name, image, films, created_date, isActive, onClick }) => {
  const formattedDate = new Date(created_date).toLocaleDateString();

  return (
    <li className={`disney-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="disney-card-image-front">
        <img src={image} alt={name} />
        <div className="name-overlay">{name}</div>
      </div>
      <div className="disney-card-details-back">
        <p>Film : {films}</p>
        <p>Date de sortie du 1er film : {formattedDate}</p>
      </div>
    </li>
  );
};

export default DisneyCard;

