import React from 'react';

const MarvelCard = ({name, image, race, actor}) => {
    return (
        <li className="marvel-card">
            <div className='card__content'>
                <img src={image} />
                <p>{name}</p>
                <p>{race}</p>
                <p>{actor}</p>
                </div>
            
        </li>
    )
};

export default MarvelCard;