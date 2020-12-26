import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header className="header d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row flex-row align-items-center">
                        <div className="col-auto logo">
                            <img src={logo} />
                        </div>
                        <div className="col hamburger-button">
                            <div className="toggle-menu">
                                <span onClick={() => setMenu(true)} className={`buttons ${!menu ? "b-open" : "b-close"}`}>≣</span>
                                <span onClick={() => setMenu(false)} className={`buttons ${menu ? "b-open" : "b-close"}`}>⨉</span>
                            </div>
                        </div>
                        <div className={`col menu ${menu ? "m-open" : "m-close"}`}>
                            <div className="row justify-content-end">
                                <ul>
                                    <li><NavLink activeClassName="active-in" to="">Item #1</NavLink></li>
                                    <li><NavLink activeClassName="active-in" to="/project-2">Item #2</NavLink></li>
                                    <li><NavLink activeClassName="active-in" to="#3">Item #3</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;