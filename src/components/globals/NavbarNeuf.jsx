import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";
import React from 'react';

const NavbarNeuf = () => {
    return (
        <nav className="navbar9">
        <div className="navbar-container">
        <MenuBurger />
        <div className="navbar-content" >
            <h1 className="navbar-title">Présentation API backend/Web</h1>
        </div>
        </div>
        <div className="navbar5-right">
            <div className="profile-button">
                <BoutonMenuProfil />
            </div>
        </div>
    </nav>
    );
};

export default NavbarNeuf;