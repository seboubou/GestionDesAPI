
import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import UpdateCharacterForm from './UdapteCharacterForm';
import SeigneurDesAnneauxCards from './SeigneurDesAnneauxCards';
import NavBarTwo from '../globals/NavBarTwo';

const SeigneurDesAnneauxContext = createContext();

const SeigneurDesAnneaux = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('...');
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [updatedCharacter, setUpdatedCharacter] = useState(null);
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    fetch('http://localhost:5000/api/sda')
      .then((response) => response.json())
      .then((sdaData) => setData(sdaData))
      .catch((err) => console.error(err));
  };

  const deleteCharacter = (characterId) => {
    axios
      .delete(`http://localhost:5000/api/sda/personnages/${characterId}`)
      .then((response) => {
        console.log('Personnage supprimé avec succès', response.data);
        // Rafraîchir les données après la suppression
        fetchCharacters();
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du personnage', error);
        // Gérer les erreurs ici
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/api/sda/personnages/${selectedCharacterId}`, {
        name,
        race,
        image,
      });

      // Réinitialiser les champs du formulaire après la mise à jour réussie
      setName('');
      setRace('');
      setImage('');

      fetchCharacters();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour du personnage', error);
    }
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleCharacterSelect = (characterId) => {
    setSelectedCharacterId(characterId);
  };



  return (
    <SeigneurDesAnneauxContext.Provider value={data}>
      <main className="sda-page">
        <NavBarTwo />
        <h1 className="title-sda">Le Seigneur des Anneaux</h1>
        <select className="sda-page_select" onChange={handleChange}>
          <option>...</option>
          {data.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </select>
        <ul className="sda-page_ul">
          {data
            .filter((el) => selectedValue === '...' || selectedValue === el.name)
            .map((el) => (
              <div key={el.id}>
                <SeigneurDesAnneauxCards
                  character={el}
                  onDelete={deleteCharacter}
                  onUpdate={handleCharacterSelect}
                  updatedCharacter={updatedCharacter} // Passer l'état updatedCharacter en tant que prop
                />
                {selectedCharacterId === el.id && (
                  <UpdateCharacterForm
                    onUpdate={updatedCharacter}
                    name={name}
                    race={race}
                    image={image}
                    setRace={setRace}
                    setName={setName}
                    setImage={setImage}
                    handleFormSubmit={handleFormSubmit}
                  />
                )}
              </div>
            ))}
        </ul>
      </main>
    </SeigneurDesAnneauxContext.Provider>
  );
};

export default SeigneurDesAnneaux;
export { SeigneurDesAnneauxContext };