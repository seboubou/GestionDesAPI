import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";


function NavBarQuatre() {


    return (
        <nav className="navbar4">
             <div className="navbar-container">
            <MenuBurger />
            <div className="navbar-content">
                <h1 className="navbar-title">Web API Pokémon</h1>
            </div>
            </div>
            <div className="navbar5-right">
                <div className="profile-button">
                    <BoutonMenuProfil />
                </div>
            </div>
        </nav>

    )
}

export default NavBarQuatre;