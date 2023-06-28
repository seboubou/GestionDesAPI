import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";



function NavBarSeven() {
    return (
        <nav className="navbar7">
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

    )
}

export default NavBarSeven;