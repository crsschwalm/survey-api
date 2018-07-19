import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false
        }
    }

    toggleMobileMenu = () => this.setState({ mobileOpen: !this.state.mobileOpen })
    activeClass = () => this.state.mobileOpen ? 'is-active' : '';
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <NavLink className="navbar-item css-brand" to="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div>Home</div>
                    </NavLink>
                    <div onClick={this.toggleMobileMenu} className={`navbar-burger burger ${this.activeClass()}`} data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbar" className={`navbar-menu ${this.activeClass()}`}>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <NavLink className="navbar-item" to="/create">Create New</NavLink>
                            <NavLink className="navbar-item" to="/">Results</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}