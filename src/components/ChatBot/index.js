import React from 'react';

import './styles.css';

import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { FiTerminal } from 'react-icons/fi';

function ChatBot() {

    function wppLink() {
        return window.location.href = "whatsapp://send?phone=+14153048334&text=user=leomoraes-digitalizeme";
    }

    function fbLink() {
        alert("Link em manutenção...");
    }

    return (
        <section className="chat" id="chat">
            <div className="container">
                <div className="content">
                    <div className="chat__card">
                        <div className="chat__card__form">
                            <span><FiTerminal size={16} color="#2d2d2d" /></span>
                            <span>Olá eu sou a Ariela. Clique <a href="https://admin.chatcompose.com/testbotland/leomoraes-digitalizeme/PT" target="chat">aqui</a> e vamos conversar.</span>
                        </div>
                        <div className="chat__card__socials">
                            <FaFacebookMessenger size={32} color="#ffffff" id="fb" onClick={fbLink} />
                            <FaWhatsapp size={32} color="#ffffff" id="wpp" onClick={wppLink} />
                        </div>
                    </div>
                    <div className="chat__info">
                        <h1>Dicas de prevenção ao Covid-19</h1>
                        <ul>
                            <li>Lavar as <span>MÃOS</span> frequentemente.</li>
                            <li>Usar o <span>COTOVELO</span> para cobrir a tosse.</li>
                            <li>Não tocar no <span>ROSTO</span>.</li>
                            <li>Manter o <span>ESPAÇO</span> a uma distância segura.</li>
                            <li>Não sair de <strong>CASA</strong> se possível.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChatBot;