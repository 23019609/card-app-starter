import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    /* TODO: Complete the navbar 
    - add links to CardList and AddCard pages 
    - style as a navbar UI */

    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

    return (
        <header className="container">
            <Link to="/">
                <strong>Card App</strong>
            </Link>

            <nav>
                <NavLink to="/" className={getClass} end>
                    Home
                </NavLink>
                <NavLink to="/cards" className={getClass} end>
                    CardList
                </NavLink>
                <NavLink to="/cards/new" className={getClass} end>
                    Add Card
                </NavLink>
            </nav>
        </header>
    );
}
