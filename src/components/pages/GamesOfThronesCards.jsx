
import React from 'react';

const GamesOfThronesCards = ({ imageUrl,fullName,title,family }) => {
  return (
    <div className="card">
      <div className="upper-part">
        <div className="upper-part-face">
          <img src={imageUrl} alt="Game of Thrones" className="card-image" />
        </div>
        <div className="upper-part-back">
        <p>{fullName}</p>
       <p>{title} </p> 
        <p>{family}</p>
        </div>
      </div>
      <div className="lower-part">
        <div className="lower-part-face">
          {fullName}
        </div>
        <div className="lower-part-back">Game Of Thrônes</div>
      </div>
    </div>
  );
};

export default GamesOfThronesCards;