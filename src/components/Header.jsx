import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <header className="header d-flex flex-row align-items-center">
            <div className="col-auto logo">
                <img src={logo}/>
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
                        <li className="active"><a href="/">Item #1</a></li>
                        <li><a href="/project-2">Item #2</a></li>
                        <li><a href="#3">Item #3</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;