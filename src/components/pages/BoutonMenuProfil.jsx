import React, { useState } from 'react';

function BoutonMenuProfil() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="profile-button_menu">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.o7sSjW0rwNh2h5E182BlVwHaE5&pid=Api&P=0&h=180"
        alt="Profile Picture"
        className="profile-picture_menu"
        onClick={toggleMenu}
      />

      {menuVisible && (
        <ul className="dropdown-menu">
          <li>
            <a href="/Profil-page">Mon profil</a>
          </li>
          <li>
            <a href="#">Se déconnecter</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default BoutonMenuProfil;


