import { NavLink } from "react-router-dom";



function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">
                        <h2>Rick and Morty</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="LeSeigneurDesAnneaux" activeClassName="active">
                        <h2>Seigneur des anneaux</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="HarryPotter" activeClassName="active">
                        <h2>Harry Potter</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Pokemon" activeClassName="active">
                        <h2>Pokemon</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active" id="right">
                        <h2>Contact Us</h2>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;