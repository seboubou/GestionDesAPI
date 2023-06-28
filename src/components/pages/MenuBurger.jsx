import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" checked={isOpen} onChange={handleToggleMenu} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
  
        <ul className={'menu__box ' + (isOpen ? 'open' : '')}>
          <li>
            <NavLink className="menu__item" to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/Dashboard" activeClassName="active" exact>
              Presentation
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/RickAndMorty">
              Rick and Morty
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/LeSeigneurDesAnneaux">
              Seigneur des anneaux
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/HarryPotter">
              Harry Potter
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/Pokemon" >
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/GamesOfThrones">
              Game of Thrones
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/Marvel">
              Marvel
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/Forum">
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/Footer">
              Contact US
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
  export default MenuBurger;



