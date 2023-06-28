import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";

function NavBarSix() {


    return (
        <nav className="navbar6">
            <div className="navbar-container">
                <MenuBurger />
                <div className="navbar-content">
                    <h1>Web API Game Of Thrônes</h1>
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

export default NavBarSix;