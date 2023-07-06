// import React, { useState } from 'react';

// const UpdateCharacterForm = ({ handleFormSubmit, name, race,image, setName, setRace, setImage }) => {
//     return (
//         <form className="update-character-form" onSubmit={handleFormSubmit}>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Nom"
//             />
//             <input
//                 type="text"
//                 value={race}
//                 onChange={(e) => setRace(e.target.value)}
//                 placeholder="Race"
//             />
//               <input
//                 type="text"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//                 placeholder="Image"
//             />
//             <button type="submit">Mettre à jour</button>
//         </form>
//     );
// };

// export default UpdateCharacterForm;
import React from 'react';

const UpdateCharacterForm = ({
  handleFormSubmit,
  name,
  race,
  image,
  setName,
  setRace,
  setImage,
}) => {
  return (
    <form className="update-character-form" onSubmit={handleFormSubmit}>
      <div>
        
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        />
      </div>
      <div>
       
        <input
          type="text"
          id="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
          placeholder="Race"
        />
      </div>
      <div>
        
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL de l'image"
        />
        {image && <img src={image} alt="Aperçu de l'image" width="50" height="50" />}
      </div>
      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default UpdateCharacterForm;
