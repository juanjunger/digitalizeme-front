import React from 'react';

import './styles.css';

import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
// import { FiTerminal } from 'react-icons/fi';

import ariela from '../../assets/images/ariela.png'

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
                            <a href="https://bit.ly/arielaChat" target="chat"><img src={ariela} alt="Ariela" /></a>
                        </div>
                        <div className="chat__card__socials">
                            <FaWhatsapp size={32} color="#ffffff" id="wpp" onClick={wppLink} />
                            <FaFacebookMessenger size={32} color="#ffffff" id="fb" onClick={fbLink} />
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