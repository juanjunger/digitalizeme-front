import React, { useState } from 'react';

import './styles.css';

function Newsletter() {
    const [email, setEmail] = useState('');

    function handleData(e) {
        e.preventDefault();
        alert(`Olá ${email}, este site não tem conexão com backend. Sendo assim é apenas ilustrativo.`);
    }
    return (
        <section className="newsletter">
            <div className="container">
                <h1>Newsletter</h1>
                <p>Insira seu email para receber as atualizações da Ariela.</p>
                <form onSubmit={handleData}>
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Digite seu email ..." required />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;