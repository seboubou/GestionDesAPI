import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";

function NavBarFive() {
    return (
        <nav className="navbar5">
            <div className="navbar-container">
                <MenuBurger />
                <div className="navbar-content">
                    <h1 className="navbar-title">Web API Rick and Morty</h1>
                </div>
            </div>
            <div className="navbar5-right">
                <div className="profile-button">
                    <BoutonMenuProfil />
                </div>
            </div>
        </nav>
    );
}

export default NavBarFive;


