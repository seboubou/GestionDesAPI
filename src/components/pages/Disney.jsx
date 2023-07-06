import React, { useState, useEffect } from 'react';
import DisneyCard from './DisneyCard';
import NavbarNeuf from '../globals/NavbarNeuf';

const Disney = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('...');
  const [activeCardId, setActiveCardId] = useState(null);
  const [newCharacterName, setNewCharacterName] = useState('');
  const [newCharacterImage, setNewCharacterImage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/disney/characters')
      .then((response) => response.json())
      .then((disneyData) => setData(disneyData))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  function handleCardClick(cardId) {
    setActiveCardId(cardId === activeCardId ? null : cardId);
  }

  function handleAddCharacter(e) {
    e.preventDefault();
    const newCharacter = {
      name: newCharacterName,
      image: newCharacterImage,
    };
    // Logic to add the new character to the database or data state
    console.log('Adding a new character:', newCharacter);
    // Clear the input fields after adding the character
    setNewCharacterName('');
    setNewCharacterImage('');
  }

  return (
    <main className="disney-page">
        <NavbarNeuf />
      <select className="disney-page_select" onChange={handleChange}>
        <option>...</option>
        {data.map((el) => (
          <option key={el.id}>{el.name}</option>
        ))}
      </select>

      <ul className="disney-page_ul">
        {data
          .filter((el) => selectedValue === '...' || selectedValue === el.name)
          .map((el) => (
            <DisneyCard
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
              created_date={el.created_date}
              films={el.films}
              isActive={el.id === activeCardId}
              onClick={() => handleCardClick(el.id)}
            />
          ))}
      </ul>

      <div className="add-character">
        <h3 className="add-character-title">Ajouter un nouveau personnage</h3>
        <form onSubmit={handleAddCharacter}>
          <div>
            <label htmlFor="character-name">Nom :</label>
            <input
              type="text"
              id="character-name"
              value={newCharacterName}
              onChange={(e) => setNewCharacterName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="character-image">Image :</label>
            <input
              type="text"
              id="character-image"
              value={newCharacterImage}
              onChange={(e) => setNewCharacterImage(e.target.value)}
            />
          </div>
          <button type="submit" className="add-character-button">
            Ajouter
          </button>
        </form>
      </div>
    </main>
  );
};

export default Disney;

