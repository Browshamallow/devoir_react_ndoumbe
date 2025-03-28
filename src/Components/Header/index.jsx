import React from 'react';
import { NavLink} from 'react-router'
import logo from "../../assets/images/logo.png"
import './header.css'

function Header() {
    return (
        <header>
        <img src={logo} alt="logo" />
        <nav>
            <ul>
                <li >
                <NavLink
                        to="/"
                        className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                        }
                    >
                        Home
                    </NavLink>

                </li>
                <li>
                <NavLink
                        to="/a-propos"
                        className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                        }
                    >
                        About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                        }
                    >
                        Contact
                    </NavLink>
                    </li>
              
            </ul>
        </nav>
    </header>
    );
}

export default Header;