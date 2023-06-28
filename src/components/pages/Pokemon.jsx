
import React, { useEffect, useState } from 'react';
import PokemonCards from './PokemonCards';
import axios from 'axios';
import ButonFavoris from './ButonFavoris';
import ButonSubmitPoke from './ButonSubmitPoke';
import NavBarQuatre from "../globals/NavBarQuatre";
// import MenuBurger from "./MenuBurger"

const Pokemon = ({theme}) => {
  // Déclaration des états
  const [data, setData] = useState([]); // Contient les données de tous les Pokémon
  const [filteredData, setFilteredData] = useState([]); // Contient les Pokémon filtrés
  const [selectedType, setSelectedType] = useState(''); // Contient le type sélectionné
  const [searchInput, setSearchInput] = useState(''); // Contient la valeur de recherche
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Contient le Pokémon sélectionné
  const [currentPage, setCurrentPage] = useState(1); // Contient le numéro de la page actuelle
  const [pokemonPerPage] = useState(50); // Nombre de Pokémon par page
  const [favoritePokemons, setFavoritePokemons] = useState([]); // Contient les Pokémon favoris
  const [showFavorites, setShowFavorites] = useState(false); // Indique si seuls les favoris doivent être affichés

  // Utilisation de useEffect pour charger les données des Pokémon au montage du composant
  useEffect(() => {
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((response) => {
        const pokemonData = response.data;
        setData(pokemonData); // Enregistre les données des Pokémon
        setFilteredData(pokemonData); // Initialise les Pokémon filtrés avec toutes les données
      })
      .catch((error) => console.error(error));
  }, []);

  // Utilisation de useEffect pour filtrer les Pokémon en fonction du type sélectionné et de la recherche
  useEffect(() => {
    const filteredPokemon = data.filter((pokemon) => {
      return (
        (selectedType === '' || pokemon.apiTypes.some((apiType) => apiType.name === selectedType)) && // Filtre par type si un type est sélectionné
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase()) // Filtre par nom si une recherche est effectuée
      );
    });
    setFilteredData(filteredPokemon); // Enregistre les Pokémon filtrés
  }, [selectedType, searchInput, data]);

  // Gère le changement de type sélectionné
  const handleTypeFilter = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  // Gère la saisie dans la barre de recherche
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  // Gère la soumission du formulaire de recherche
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const value = event.target.searchInput.value;
    if (value.trim() !== '') {
      const foundPokemon = filteredData.find(
        (pokemon) => pokemon.name.toLowerCase() === value.toLowerCase()
      );
      setSelectedPokemon(foundPokemon || null);
    }
    setSelectedType('');
    setCurrentPage(1);
  };

  // Gère le changement de page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   // Gère l'ajout/suppression d'un Pokémon aux favoris
   const handleToggleFavorite = (pokemonId) => {
    if (favoritePokemons.includes(pokemonId)) {
      setFavoritePokemons(favoritePokemons.filter((id) => id !== pokemonId)); // Supprime le Pokémon des favoris s'il est déjà présent
    } else {
      setFavoritePokemons([...favoritePokemons, pokemonId]); // Ajoute le Pokémon aux favoris s'il n'est pas déjà présent
    }
  };

  // Affiche uniquement les Pokémon favoris
  const handleShowFavorites = () => {
    const favoritePokemonData = data.filter((pokemon) => favoritePokemons.includes(pokemon.id));
    setFilteredData(favoritePokemonData); // Filtre les Pokémon en affichant uniquement les favoris
    setSelectedType(''); // Réinitialise le type sélectionné
    setCurrentPage(1); // Reviens à la première page
    setShowFavorites(true); // Active le mode de visualisation des favoris
  };

  // Affiche tous les Pokémon
  const handleShowAllPokemons = () => {
    setFilteredData(data); // Réinitialise les Pokémon filtrés pour afficher tous les Pokémon
    setSelectedType(''); // Réinitialise le type sélectionné
    setCurrentPage(1); // Reviens à la première page
    setShowFavorites(false); // Désactive le mode de visualisation des favoris
  };

  // Calcule les index du premier et du dernier Pokémon de la page actuelle
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredData.slice(indexOfFirstPokemon, indexOfLastPokemon);





  return (
    <main className="poke-title">
      <NavBarQuatre />
      {/* <MenuBurger /> */}
      <div className="pokemon-page">
        <h1 className='title-poke'>Pokemon</h1>
        <div className="page-counter">{currentPage}</div>
        <div className="type-filter">
          <ButonFavoris onShowFavorites={handleShowFavorites} />
          <select className='types' value={selectedType} onChange={handleTypeFilter}>
         {/* // Le menu déroulant permet aux utilisateurs de filtrer les Pokémon par type */}
            <option value="">All types</option>
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
         {/* // La barre de recherche permet aux utilisateurs de rechercher un Pokémon par son nom */}
            <input
              type="text"
              placeholder="Rechercher un Pokémon"
              id="searchInput"
              value={searchInput}
              onChange={handleSearch}
            />
            <ButonSubmitPoke />  
            {/* //Le bouton de soumission permet de déclencher la recherche */}
          </form>
        </div>
        <div className="btn-retour">
        {/* //Si la liste affiche les favoris, le bouton "Retour" permet de revenir à la liste complète des Pokémon */}
          {showFavorites && (
            <button className="back-btn" onClick={handleShowAllPokemons}>
              Retour
            </button>
          )}
        </div>
        <div className='pagination'>
        {/* Les flèches de pagination permettent à l'utilisateur de passer à la page précédente ou suivante */}
          {currentPage > 1 && (
            <button className='button-left' onClick={() => goToPage(currentPage - 1)}>
              &lt;
            </button>
          )}
          {/* La flèche de droite est affichée uniquement si la liste actuelle contient le nombre maximum de Pokémon par page */}
          {currentPokemon.length === pokemonPerPage && (
            <button className='button-rigth' onClick={() => goToPage(currentPage + 1)}>
              &gt;
            </button>
          )}
        </div>
        {/* Si un Pokémon est sélectionné, affiche ses détails */}
        {selectedPokemon ? (
          <div className="selected-pokemon">
            <PokemonCards
              key={selectedPokemon.id}
              id={selectedPokemon.id}
              name={selectedPokemon.name}
              image={selectedPokemon.image}
              stats={selectedPokemon.stats}
              type={selectedPokemon.type}
              onToggleFavorite={handleToggleFavorite}
              favoritePokemons={favoritePokemons}
            />
          </div>
        //    Sinon, affiche la liste des Pokémon 
        ) : (
          <>
            <ul className="pokemon-page_ul">
              {currentPokemon.map((el) => (
                <PokemonCards
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  stats={el.stats}
                  type={el.type}
                  onToggleFavorite={handleToggleFavorite}
                  favoritePokemons={favoritePokemons}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
};

export default Pokemon;

