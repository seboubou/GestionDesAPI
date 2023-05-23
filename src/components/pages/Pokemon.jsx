
import React, { useEffect, useState } from 'react';
import PokemonCards from './PokemonCards';
import axios from 'axios';

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
//   -----------------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(50); // Nombre de Pokémon par page
//   ------------------------------------------------------------------------

// ----------------------------------------------------------------------
const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredData.slice(indexOfFirstPokemon, indexOfLastPokemon);
//   ----------------------------------------------------------------------------

  useEffect(() => {
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((response) => {
        const pokemonData = response.data;
        setData(pokemonData);
        setFilteredData(pokemonData);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filteredPokemon = data.filter((pokemon) => {
      return (
        (selectedType === '' || pokemon.apiTypes.some((apiType) => apiType.name === selectedType)) &&
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    });

    setFilteredData(filteredPokemon);
  }, [selectedType, searchInput, data]);

  const handleTypeFilter = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const foundPokemon = data.find(
      (pokemon) => pokemon.name.toLowerCase() === searchInput.toLowerCase()
    );
    setSelectedPokemon(foundPokemon || null);
    setSelectedType('');
  };

// Fonction pour changer de page
const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="pokemon-page">

<div className='pagination'>
      {currentPage > 1 && (
            <button onClick={() => goToPage(currentPage - 1)}>
              &lt; 
            </button>
      )}
      {currentPokemon.length === pokemonPerPage && (
            <button onClick={() => goToPage(currentPage + 1)}>
               &gt;
            </button>
          )}
      </div>


        <div className="filter-search">
      <div className="type-filter">
        <select className='types' value={selectedType} onChange={handleTypeFilter}>
          <option value="">All</option>
          <option value="Eau">Eau</option>
          <option value="Feu">Feu</option>
          <option value="Vol">Volant</option>
          <option value="Poison">Poison</option>
          <option value="Roche">Roche</option>
          <option value="Insecte">Insecte</option>
          <option value="Spectre">Spectre</option>
          <option value="Plante">Plante</option>
          <option value="Électrik">Électrik</option>
          <option value="Psy">Psy</option>
          <option value="Glace">Glace</option>
          <option value="Fée">Fée</option>
          <option value="Ténèbres">Ténèbres</option>
          <option value="Sol">Sol</option>
          <option value="Acier">Acier</option>
          <option value="Dragon">Dragon</option>
        </select>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Rechercher un Pokémon"
            value={searchInput}
            onChange={handleSearch}
          />
          <button type="submit">Valider</button>
        </form>
      </div>
      </div>
      {selectedPokemon ? (
        <div className="selected-pokemon">
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.image} alt={selectedPokemon.name} />
          <div> <h3>Stats:</h3>
            <ul>
              {selectedPokemon.stats && selectedPokemon.stats.length > 0 ? (
                selectedPokemon.stats.map((stat) => (
                  <li key={stat.name}>
                    {stat.name}: {stat.value}
                  </li>
                ))
              ) : (
                <li>No stats available.</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <>
        <ul className="pokemon-page_ul">
          {/* {filteredData.map((el) => { */}
          {currentPokemon.map((el) => {
            return (
              <PokemonCards
                key={el.id}
                name={el.name}
                image={el.image}
                stats={el.stats}
              />
            );
          })}
        </ul>
     
        </>
      )}
    </main>
  );
};

export default Pokemon;