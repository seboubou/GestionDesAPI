import React from 'react';
import { NavLink } from "react-router-dom";

const SeigneurDesAnneauxCards = ({ name, image, id, race }) => {
    return (
        <div>
               <li className="sda-card">
            <NavLink to={`/characters/${id}`}>
                <img src={image} />
                <p>{name}</p>
                <p>{race}</p>
            </NavLink>
        </li>
        </div>
    );
};

export default SeigneurDesAnneauxCards;