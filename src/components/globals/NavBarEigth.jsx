import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";



function NavBarEigth() {
    return (
        <nav className="navbar7">
            <div className="navbar-container">
            <MenuBurger />
            <div className="navbar-content" >
                <h1 className="navbar-title"> API backend/Web</h1>
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

export default NavBarEigth;