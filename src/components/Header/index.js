import React from 'react';

import './styles.css';
import logoImg from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';

import $ from 'jquery';
import { Link } from 'react-router-dom';

function Header() {
    
    function handleToggle() {
        $('.nav__menu__mobile__items ul').slideToggle();
    };

    return (
        <header>
            <div className="container">
                <div className="nav">
                    <div className="nav__logo">
                        <a href="/">
                            <img src={logoImg} alt="Logo"/>
                        </a>
                    </div>
                    <div className="nav__menu__desktop">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pitch">Pitch</Link></li>
                        </ul>
                    </div>
                    <div className="nav__menu__mobile">
                        <div className="nav__menu__mobile__items">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/pitch">Pitch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav__menu__mobile__btn">
                        <FaBars size={24} color="#ffffff" className="nav__menu__mobile__button" onClick={handleToggle} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;