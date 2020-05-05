import React from 'react';

import './styles.css';
import logoImg from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="nav">
                    <div className="nav__logo">
                        <img src={logoImg} alt="Logo"/>
                    </div>
                    <div className="nav__menu__desktop">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#chat">Chat</a></li>
                            <li><a href="https://digitalizeme-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        </ul>
                    </div>
                    <div className="nav__menu__mobile">
                        <FaBars size={24} color="#ffffff" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;