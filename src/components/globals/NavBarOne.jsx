import MenuBurger from "../pages/MenuBurger";
import BoutonMenuProfil from "../pages/BoutonMenuProfil";


function NavBarOne() {
    return (
        <nav className="navbar1">
             <div className="navbar-container" >
            <MenuBurger />
            <div  className="navbar-content">
                <h1 className="navbar-title"> API Backend Marvel </h1>
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

export default NavBarOne;