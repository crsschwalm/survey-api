import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a
                className="navbar-item"
                href="https://dminc.com/location/indianapolis-in/"
            >
                DMI
            </a>
        </div>

        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <NavLink to="/">Home</NavLink>
                        </p>
                        <p className="control">
                            <NavLink to="/survey">Survey</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)
export default Header;