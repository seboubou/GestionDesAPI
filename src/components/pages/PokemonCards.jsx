

import React, { useState } from 'react';

const PokemonCards = ({ id, name, image, stats, type, onToggleFavorite, favoritePokemons }) => {
  const [showStats, setShowStats] = useState(false);

  const handleToggleStats = () => {
    setShowStats(!showStats);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(id);
  };

  return (
    <li className="pokemon-card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <button className="stats-button ui-btn" onClick={handleToggleStats}>
        {showStats ? '...' : 'Show Stats'}
      </button>
      <button className="favorite-button" onClick={handleToggleFavorite}>
        {favoritePokemons.includes(id) ? '❤️' : '🤍'}
      </button>
      {showStats && (
        <div className="pokemon-stats-popup">
          <div className="pokemon-stats">
            {Object.entries(stats).map(([statName, statValue]) => (
              <p className="stat" key={statName}>
                {statName}: {statValue}
              </p>
            ))}
            <button className="close-button" onClick={handleToggleStats}>
              &times;
            </button>
          </div>
          <div className="popup-overlay" onClick={handleToggleStats} />
        </div>
      )}
    </li>
  );
};

export default PokemonCards;




