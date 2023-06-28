import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";


function NavBarTwo() {


    return (
        <nav className="navbar2">
             <div className="navbar-container">
            <MenuBurger />
            <div className="navbar-content">
                <h1> API Backend</h1>
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

export default NavBarTwo;