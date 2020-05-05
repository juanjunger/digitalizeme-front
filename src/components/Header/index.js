import React from 'react';

import './styles.css';
import logoImg from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';

import $ from 'jquery';

function Header() {
    
    function handleToggle() {
        $('.nav__menu__mobile__items ul').slideToggle();
    };

    return (
        <header>
        <link href="https://admin.chatcompose.com/static/PT/global/export/css/main.1b3f9fb9.css" rel="stylesheet" />>   
        <script async type="text/javascript" src="https://admin.chatcompose.com/static/PT/global/export/js/main.c9ea3138.js" user="leomoraes-digitalizeme"></script>
            <div className="container">
                <div className="nav">
                    <div className="nav__logo">
                        <img src={logoImg} alt="Logo"/>
                    </div>
                    <div className="nav__menu__desktop">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#chat">Chat</a></li>
                            <li><a href="https://digitalizeme-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="/pitch">Pitch</a></li>
                        </ul>
                    </div>
                    <div className="nav__menu__mobile">
                        <div className="nav__menu__mobile__items">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/#chat">Chat</a></li>
                                <li><a href="https://digitalizeme-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                <li><a href="/pitch">Pitch</a></li>
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