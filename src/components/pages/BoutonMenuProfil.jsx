import React, { useState } from 'react';

function BoutonMenuProfil() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="profile-button_menu">
      <img
        src="https://scontent-cdg4-2.xx.fbcdn.net/v/t1.18169-9/21369347_1989168451359048_5695076680075608336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=bNIotAa77r0AX-7ohZY&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDiIvrPT55qwOobkvIfjs51CaUh1P0OA00gQF0RNYd6TA&oe=64C384C3"
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


