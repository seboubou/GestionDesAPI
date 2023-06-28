import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GamesOfThronesCards from './GamesOfThronesCards';
import NavBarSix from '../globals/NavBarSix';
// import MenuBurger from "./MenuBurger"


const GamesOfThrones = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://thronesapi.com/api/v2/Characters')
      .then((response) => {
        const gameOfThronesData = response.data;
        setData(gameOfThronesData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className='game-page'>
      <NavBarSix /> 
      {/* <MenuBurger /> */}
      <h2 className='titre-gameOfThrones'>Game of Thrones</h2>

      <ul className='game-page_ul'>
        {data.map((character) => (
          <GamesOfThronesCards
            key={character.id}
            fullName={character.fullName}
            imageUrl={character.imageUrl}
            title={character.title}
            family={character.family}
          />
        ))}
      </ul>
    </main>
  );
};

export default GamesOfThrones;





