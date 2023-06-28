import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";

function NavBarTrois() {


    return (
        <nav className="navbar3">
            <div className="navbar-container">
                <MenuBurger />
                <div className="navbar-content">
                    <h1>Web API</h1>
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

export default NavBarTrois;