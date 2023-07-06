import React, { useContext } from 'react';
import { SeigneurDesAnneauxContext } from './SeigneurDesAnneaux';

const SeigneurDesAnneauxCard = ({ character, onDelete, onUpdate }) => {
  const data = useContext(SeigneurDesAnneauxContext);

  return (
    <li className="sda-card">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
      <p>{character.race}</p>
      <button onClick={() => onDelete(character.id)}>Supprimer</button>
      <button onClick={() => onUpdate(character.id)}>Modifier</button>
    </li>
  );
};

export default SeigneurDesAnneauxCard;


