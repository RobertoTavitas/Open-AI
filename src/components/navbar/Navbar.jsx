import React, { useState } from 'react';

import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#what">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <img src={ logo } alt="logo" />
                </div>
                <div className="navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="navbar-menu">
                {/* short if - else */}
                {toggleMenu 
                    // if toggleMenu == true
                    ?  <RiCloseLine color="#fff" size={27} onClick={ () => setToggleMenu(false) } />
                    // if toggleMenu == false
                    : <RiMenu3Line color="#fff" size={27} onClick={ () => setToggleMenu(true) } />
                }
                {toggleMenu && (
                    <div className="navbar-menu-container scale-up-center">
                        <div className="navbar-menu-container-links">
                            <Menu />
                            <div className="navbar-menu-container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
