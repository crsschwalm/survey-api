import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <p className="control">
                <NavLink to="/">Home</NavLink>
            </p>
        </div>

        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <NavLink to="/create">Create New</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)
export default Header;